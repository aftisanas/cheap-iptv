import { ImageResponse } from "next/og";

// Site-wide social share image (1200×630). Inherited by every route that does
// not declare its own openGraph.images, so all pages get a branded preview.
export const alt = "Cheap IPTV — Cheapest UK IPTV Service from £3.33";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0118 0%, #1a0a3e 55%, #0c1445 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#c4b5fd",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: "1px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "8px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(196,181,253,0.35)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            cheap-iptv.tv
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          Cheap IPTV UK
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 800,
            color: "#22d3ee",
            lineHeight: 1.1,
            marginTop: "8px",
            letterSpacing: "-1px",
          }}
        >
          37,000 Channels in 4K — From £3.33/mo
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "rgba(226,232,240,0.92)",
            marginTop: "32px",
            maxWidth: "940px",
            lineHeight: 1.35,
          }}
        >
          Best-value cheap IPTV subscription · built-in VPN · five screens · 30-day money-back guarantee
        </div>
      </div>
    ),
    { ...size }
  );
}
