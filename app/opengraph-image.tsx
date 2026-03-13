import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Drew Bolles — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const interData = fetch(
  new URL(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
  )
).then((res) => res.arrayBuffer());

const jetbrainsData = fetch(
  new URL(
    "https://fonts.gstatic.com/s/jetbrainsmono/v21/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
  )
).then((res) => res.arrayBuffer());

export default async function Image() {
  const [interFont, jetbrainsFont] = await Promise.all([
    interData,
    jetbrainsData,
  ]);

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
          backgroundColor: "#0a0e1a",
          position: "relative",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 70% 30%, rgba(95, 163, 255, 0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 212, 170, 0.04) 0%, transparent 50%)",
            display: "flex",
          }}
        />
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 1,
          }}
        >
          {/* Terminal prompt */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "JetBrains Mono",
              fontSize: "18px",
            }}
          >
            <span style={{ color: "#5fa3ff" }}>$</span>
            <span style={{ color: "rgba(255,255,255,0.5)", marginLeft: "8px" }}>
              drew
            </span>
          </div>
          {/* Name */}
          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: "80px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Drew Bolles
          </div>
          {/* Title */}
          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: "38px",
              fontWeight: 600,
              color: "#5fa3ff",
              lineHeight: 1,
            }}
          >
            Software Engineer
          </div>
          {/* Tags */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "JetBrains Mono",
              fontSize: "20px",
              marginTop: "8px",
            }}
          >
            <span style={{ color: "#1adbab" }}>&gt;</span>
            <span style={{ color: "rgba(255,255,255,0.3)", marginLeft: "10px" }}>
              frontend · product · ai
            </span>
          </div>
        </div>
        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            fontFamily: "JetBrains Mono",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#5fa3ff" }}>d</span>
          <span style={{ color: "#1adbab" }}>b</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 700,
        },
        {
          name: "JetBrains Mono",
          data: jetbrainsFont,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
