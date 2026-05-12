(function () {
  function getProjectId() {
    const match = location.pathname.match(/^\/projects\/(\d+)/);
    return match ? match[1] : null;
  }

  function addTurboWarpButton() {
    if (document.querySelector(".turbowarp-btn")) return;

    const seeInsideBtn =
      document.querySelector(".see-inside") ||
      document.querySelector('[class*="see-inside"]') ||
      [...document.querySelectorAll("button")].find(
        (btn) =>
          btn.textContent.includes("中を見る") ||
          btn.textContent.includes("See inside")
      );

    if (!seeInsideBtn) return;

    const projectId = getProjectId();
    if (!projectId) return;

    const btn = document.createElement("a");
    btn.className = "turbowarp-btn";
    btn.href = `https://turbowarp.org/${projectId}`;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.textContent = "TurboWarpで開く";

    seeInsideBtn.insertAdjacentElement("afterend", btn);
  }

  const observer = new MutationObserver(() => {
    addTurboWarpButton();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  addTurboWarpButton();
})();
