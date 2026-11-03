"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    tiktokEmbed?: { lib?: { render?: (nodes?: HTMLElement[]) => void } };
  }
}

export default function TiktokEmbed() {
  useEffect(() => {
    const SRC = "https://www.tiktok.com/embed.js";
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SRC}"]`
    );

    // If the script is already loaded, re-run the embed renderer
    if (existing && window.tiktokEmbed?.lib?.render) {
      window.tiktokEmbed.lib.render();
      return;
    }

    // Otherwise inject the script (it auto-renders any .tiktok-embed on load)
    if (!existing) {
      const script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@carrya.id/photo/7583622208954699029"
      data-video-id="7583622208954699029"
      style={{ maxWidth: 605, minWidth: 288, margin: "0 auto" }}
    >
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="@carrya.id"
          href="https://www.tiktok.com/@carrya.id?refer=embed"
        >
          @carrya.id
        </a>
      </section>
    </blockquote>
  );
}
