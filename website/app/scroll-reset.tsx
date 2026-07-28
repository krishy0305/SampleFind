"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    function resetToTop() {
      if (window.location.hash) {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
      }

      window.scrollTo(0, 0);
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    }

    function prepareForRefresh() {
      window.scrollTo(0, 0);
    }

    resetToTop();
    window.addEventListener("pageshow", resetToTop);
    window.addEventListener("beforeunload", prepareForRefresh);

    return () => {
      window.removeEventListener("pageshow", resetToTop);
      window.removeEventListener("beforeunload", prepareForRefresh);
    };
  }, []);

  return null;
}
