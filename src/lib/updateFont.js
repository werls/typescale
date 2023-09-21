export function updateFont(font) {
  const head = document.querySelector("head");
  const fontSheet = document.createElement("link");
  fontSheet.rel = "stylesheet";
  fontSheet.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700;800&display=swap`;
  head.appendChild(fontSheet);
}