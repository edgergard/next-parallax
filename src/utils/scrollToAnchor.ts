import type { Anchor } from "@/enums";

export const scrollToAnchor = (anchorId: Anchor): void => {
  const el = document.getElementById(anchorId);

  if (!el) {
    return;
  };

  window.scroll({
    top: el.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};