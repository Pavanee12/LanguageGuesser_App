
import{ createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc"; 
// const franc = require("franc");
const langs = require("langs");
const colors = require("colors"); 
// let franc = await import('franc')

const input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und')
{
    console.log("Sorrriii!! Not Found".red);
}
else
{
    const language = langs.where("3",langCode);
    console.log(`your language is: ${language.name}`.green);
} 