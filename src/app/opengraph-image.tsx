import { ImageResponse } from "next/og";

export const alt =
  "Cheap IPTV UK — 37,000 channels, 4K UHD, built-in VPN, five screens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time so the social card never depends on a binary asset
 * being present in /public. Applies to every route that doesn't define its own.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0118 0%, #1a0a3e 55%, #0c1445 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 30,
            fontWeight: 700,
            color: "#22d3ee",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          cheap-iptv.tv
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: 76,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Cheap IPTV UK — Maximum
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#a78bfa",
          }}
        >
          Streaming For Minimum Spend
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: 32,
            color: "#cbd5e1",
          }}
        >
          37,000 channels · 4K UHD · Built-in VPN · 5 screens
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "44px",
            alignSelf: "flex-start",
            padding: "16px 34px",
            borderRadius: "9999px",
            background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)",
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          30-day money-back guarantee
        </div>
      </div>
    ),
    size
  );
}
