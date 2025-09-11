import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess my naruto char");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);

