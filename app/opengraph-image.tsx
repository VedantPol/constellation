import { ImageResponse } from "next/og";

export const alt = "Constellation — Vedant Pol's Projects";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 78% 12%, rgba(34,197,94,0.28), transparent 55%)",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 24px 4px rgba(34,197,94,0.8)",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#86EFAC",
            }}
          >
            Constellation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "32px",
            fontSize: "84px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          <span>Every project,</span>
          <span style={{ color: "#22C55E" }}>one constellation.</span>
        </div>

        <div style={{ display: "flex", marginTop: "36px", fontSize: "30px", color: "#CBD5E1" }}>
          Live sites, portfolios and AI/ML tools by Vedant Pol
        </div>
      </div>
    ),
    { ...size },
  );
}
