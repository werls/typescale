export function updateFont(font) {
  const head = document.querySelector("head");
  let fontSheet = document.getElementById("font-sheet");

  if (!fontSheet) {
    const fontSheet = document.createElement("link");
    fontSheet.id = "font-sheet"
    fontSheet.rel = "stylesheet";
    
    fontSheet.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700;800&display=swap`;
    head.appendChild(fontSheet);
  } else {
    fontSheet.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700;800&display=swap`;
  }
}