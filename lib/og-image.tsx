import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME, TAGLINE } from "@/lib/metadata";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

let assetsPromise: Promise<{
  bricolage: ArrayBuffer;
  hanken: ArrayBuffer;
  logoSrc: string;
}> | null = null;

function loadAssets() {
  if (!assetsPromise) {
    assetsPromise = Promise.all([
      readFile(join(process.cwd(), "assets/fonts/BricolageGrotesque-800.woff")),
      readFile(join(process.cwd(), "assets/fonts/HankenGrotesk-400.woff")),
      readFile(join(process.cwd(), "assets/logo-og.png"), "base64"),
    ]).then(([bricolage, hanken, logoBase64]) => ({
      bricolage: new Uint8Array(bricolage).buffer,
      hanken: new Uint8Array(hanken).buffer,
      logoSrc: `data:image/png;base64,${logoBase64}`,
    }));
  }
  return assetsPromise;
}

export async function renderOgImage(eyebrow: string, headline: string) {
  const { bricolage, hanken, logoSrc } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF7EE",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "#DCE6C9",
            opacity: 0.7,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og's ImageResponse (satori) requires a plain <img>, not next/image. */}
          <img
            src={logoSrc}
            alt=""
            width={76}
            height={76}
            style={{ borderRadius: 20 }}
          />
          <span
            style={{
              fontFamily: "Bricolage Grotesque",
              fontSize: 40,
              fontWeight: 800,
              color: "#2A1B12",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE_NAME}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <span
            style={{
              fontFamily: "Hanken Grotesk",
              fontSize: 24,
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#B85F26",
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontFamily: "Bricolage Grotesque",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#2A1B12",
            }}
          >
            {headline}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: bricolage, style: "normal", weight: 800 },
        { name: "Hanken Grotesk", data: hanken, style: "normal", weight: 400 },
      ],
    },
  );
}

export const DEFAULT_OG_EYEBROW = "Effortless by design";
export const DEFAULT_OG_HEADLINE = TAGLINE;
