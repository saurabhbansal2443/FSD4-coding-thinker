// import abc, { sum, sub } from "./Maths.js";
// import figlet from "figlet";
// import * as googleTTS from "google-tts-api"; // ES6 or TypeScript

// // get audio URL
// // const url = googleTTS.getAudioUrl("Hello World I am saurabh", {
// //   lang: "en",
// //   slow: false,
// //   host: "https://translate.google.com",
// // });
// // console.log("url", url); // https://translate.google.com/translate_tts?...

// // console.log(abc(2, 3));

// async function doStuff() {
//   const text = await figlet.text("SAURABH");
//   console.log(text);
// }

// doStuff();

// import os from "os";

// console.log(os.cpus());

import fs from "fs";

// fs.mkdirSync('./tempfolder')

// fs.writeFileSync("./tempfolder/dummy.txt" , " Hey I am dummy text")

console.log(fs.readFileSync("./tempfolder/dummy.txt" , "UTF-8"));
