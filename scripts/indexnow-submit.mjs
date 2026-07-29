// IndexNow bulk submitter for cheap-iptv.tv
//
// Instantly notifies Bing + Yandex (and any IndexNow participant, which also
// feeds Microsoft Copilot's index) that our URLs are new/updated. Safe and
// official — IndexNow is Microsoft/Yandex's own protocol. Google does NOT use
// IndexNow; use the sitemap + GSC for Google.
//
// Usage:  npm run indexnow
//
// It reads the live sitemap, so it always submits the current URL set. The key
// file (public/<KEY>.txt) must be deployed live first so IndexNow can verify it.

const HOST = "cheap-iptv.tv";
const KEY = "91b23ba0eaf24523e40f3efca8b7b72b";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function getUrlsFromSitemap() {
  const res = await fetch(SITEMAP_URL, { headers: { "User-Agent": "indexnow-submitter" } });
  if (!res.ok) throw new Error(`Could not fetch sitemap (${res.status})`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(urls)];
}

async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION, { headers: { "User-Agent": "indexnow-submitter" } });
  if (!res.ok) {
    throw new Error(
      `Key file not reachable at ${KEY_LOCATION} (${res.status}). ` +
        `Deploy the site first so the key file is live, then re-run.`
    );
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(`Key file content mismatch at ${KEY_LOCATION}.`);
  }
}

async function main() {
  console.log("Verifying key file is live…");
  await verifyKeyFile();
  console.log(`  ✓ ${KEY_LOCATION}`);

  console.log("Reading sitemap…");
  const urlList = await getUrlsFromSitemap();
  console.log(`  ✓ ${urlList.length} URLs found`);
  urlList.forEach((u) => console.log(`    - ${u}`));

  const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

  console.log("\nSubmitting to IndexNow (Bing + Yandex)…");
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  // IndexNow returns 200 (OK) or 202 (Accepted) on success.
  if (res.status === 200 || res.status === 202) {
    console.log(`  ✓ Accepted (HTTP ${res.status}). ${urlList.length} URLs submitted.`);
  } else {
    const text = await res.text().catch(() => "");
    console.error(`  ✗ Unexpected response: HTTP ${res.status} ${text}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("IndexNow submit failed:", err.message);
  process.exit(1);
});
