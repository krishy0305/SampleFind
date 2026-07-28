import type { Metadata } from "next";
import { headers } from "next/headers";
import { ScrollReset } from "./scroll-reset";
import "./globals.css";

const title = "SampleFind";
const description =
  "Scan local sample folders, classify sounds with AI, extract BPM and key, and find the right sound from one producer-focused library.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og-samplefind.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    applicationName: "SampleFind",
    keywords: [
      "SampleFind",
      "AI sample manager",
      "music production",
      "audio search",
      "sample library",
      "LAION-CLAP",
    ],
    icons: {
      icon: "/samplefind-logo.svg",
      shortcut: "/samplefind-logo.svg",
      apple: "/samplefind-icon.svg",
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "SampleFind",
      images: [
        {
          url: socialImage,
          width: 1600,
          height: 1000,
          alt: "SampleFind — AI-powered sample discovery for music producers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
