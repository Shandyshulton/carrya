import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CARRYA - Upcycled Denim Totebag",
    short_name: "CARRYA",
    description:
      "Totebag denim upcycle buatan tangan yang fungsional, stylish, dan berkelanjutan.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F7F2",
    theme_color: "#111d2e",
    icons: [
      {
        src: "/carrya-logo.png",
        sizes: "640x640",
        type: "image/png",
      },
    ],
  };
}
