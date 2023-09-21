import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config()

export async function getFontsAndSave() {
  const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.VITE_API_KEY}`);
  const data = await response.json();

	// console.log(data)
	fs.writeFile('src/lib/fonts.json', JSON.stringify(data), (err) => {
		if (err) throw err;
		console.log('Fonts data saved!');
	});
}

getFontsAndSave()