import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "CARRYA - Upcycled Denim Totebag";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b1320",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #1b2d45 0%, transparent 45%), radial-gradient(circle at 85% 80%, #2c4b73 0%, transparent 45%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(230,161,0,0.15)",
            border: "1px solid rgba(230,161,0,0.4)",
            color: "#E6A100",
            padding: "8px 20px",
            borderRadius: 999,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Upcycled Denim
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: 8,
            lineHeight: 1,
          }}
        >
          CARRYA
        </div>

        {/* Amber underline */}
        <div
          style={{
            width: 160,
            height: 8,
            backgroundColor: "#E6A100",
            borderRadius: 999,
            marginTop: 28,
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#c7d7e7",
            maxWidth: 820,
            textAlign: "center",
          }}
        >
          Totebag denim upcycle yang fungsional, stylish, dan berkelanjutan
        </div>
      </div>
    ),
    { ...size }
  );
}
