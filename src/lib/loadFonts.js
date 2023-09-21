// import dotenv from 'dotenv';
// dotenv.config();

export async function loadFonts() {
  const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${import.meta.env.VITE_API_KEY}`);
  const data = await response.json();
  return data.items;
}