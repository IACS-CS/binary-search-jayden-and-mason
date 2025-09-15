import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess my naruto charecter");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
ti.output("Welcome to the Naruto character guessing game!");
ti.output("you will pick a charecter from the list below and I will try to guess it");
// add image of naruto charecters and add a list of thier names 
ti.output(" are they part of the main cast?");
let maincast = await ti.prompt("are they part of the main cast?")
if(maincast.toLocaleLowerCase()=== "yes"){
let malefemale1= await ti.prompt("are they male or female")
if(malefemale1.toLocaleLowerCase()==="male"){
  
}
} else if(maincast.toLocaleLowerCase()=== "no") {

}