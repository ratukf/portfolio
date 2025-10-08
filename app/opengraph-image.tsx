import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Ratu Kila Fatimah — Front-End Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#0f172a",
            marginBottom: "20px",
          }}
        >
          Ratu Kila Fatimah
        </h1>
        <p
          style={{
            fontSize: "40px",
            color: "#64748b",
            marginBottom: "40px",
          }}
        >
          Front-End Developer
        </p>
        <p
          style={{
            fontSize: "28px",
            color: "#64748b",
            maxWidth: "800px",
          }}
        >
          Building accessible, high-performance web applications with React.js, Next.js, and Tailwind CSS
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
