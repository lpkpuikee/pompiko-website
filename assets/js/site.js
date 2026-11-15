/**
 * Resolve asset/nav base for GitHub Pages project sites (/pompiko-website/) and local previews.
 * Pages set <html data-root="..."> with a path relative to the site root from that page.
 */
(function () {
  const root = document.documentElement;
  const configured = root.getAttribute("data-root") || "./";
  // Normalize trailing slash
  const base = configured.endsWith("/") ? configured : configured + "/";
  root.style.setProperty("--site-root", base);

  document.querySelectorAll("[data-href-root]").forEach((el) => {
    const rel = el.getAttribute("data-href-root") || "";
    el.setAttribute("href", base + rel.replace(/^\//, ""));
  });

  document.querySelectorAll("[data-src-root]").forEach((el) => {
    const rel = el.getAttribute("data-src-root") || "";
    el.setAttribute("src", base + rel.replace(/^\//, ""));
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
