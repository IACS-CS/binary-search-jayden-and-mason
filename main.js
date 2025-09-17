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
let maincast = await ti.prompt("are they part of the main cast?")
if(maincast.toLocaleLowerCase()=== "yes"){
  let malefemale1= await ti.prompt("are they male or female")
  if(malefemale1.toLocaleLowerCase()==="male"){
let Dojornodoj1= await ti.prompt("do they have a Dojutsu")
  if(Dojornodoj1.toLocaleLowerCase()==="yes"){
      let ognoog1= await ti.prompt ("Are they from OG or Ship")
      if(ognoog1.toLocaleLowerCase()=== "og"){
        let uchiha1 = await ti.prompt ("Is your character part of the Uchiha?")
        if(uchiha1.toLocaleLowerCase()==="yes"||uchiha1.toLocaleLowerCase()==="uchiha"){
          let rook1 = await ti.prompt ("Is your character part of the Rookie 9?")
          if(rook1.toLocaleLowerCase()==="yes"){ ti.output ("Your character is Sasuke");
          } else if (rook1.toLocaleLowerCase()==="no") ti.output ("Your character is Itachi");
        }
      }
    }
  }
} else if(maincast.toLocaleLowerCase()=== "no") {

}