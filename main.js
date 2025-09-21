import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess my naruto charecter");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
if (name.toLocaleLowerCase()==="the sage of six paths"||name.toLocaleLowerCase()==="sage of six paths") ti.output("Sage of the Six Paths thank you for being the goat and starting Ninshu");
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
        } else if (uchiha1.toLocaleLowerCase()==="no"){
        }let hyuga= await ti.prompt ("do they have the Byakugan")
        if (hyuga.toLocaleLowerCase()==="yes"){
          ti.output("Your character is Neji");
        } else if (hyuga.toLocaleLowerCase()=== "no") {
          ti.output("Your character is Kakashi");
        }
      } else if (ognoog1.toLocaleLowerCase()==="ship"||ognoog1.toLocaleLowerCase()==="shippuden"){
        let uchiha2 = await ti.prompt ("Is your character part of the Uchiha")
        if (uchiha2.toLocaleLowerCase()==="yes"){ ti.output ("Your character is Tobi/Obito")
        } else if (uchiha2.toLocaleLowerCase()==="no") ti.output ("Your character is Pain/Nagato")//ai helped us with a minor mistake after the to.localelowercase -->()
      }
    } else if (Dojornodoj1.toLocaleLowerCase()==="no"){
      let ognoog2= await ti.prompt ("Are they from OG or Ship")
      if(ognoog2.toLocaleLowerCase()=== "og"){
       let sensei1= await ti.prompt ("Is your character a sensei (includes Konohamaru)?")
        if (sensei1.toLocaleLowerCase()==="yes"){
         let perv= await ti.prompt ("Is your character a pervy old man (or a pervy young man)?")
         if (perv.toLocaleLowerCase()==="yes"){
           let restinpeace= await ti.prompt ("Does your character die?")
           if (restinpeace.toLocaleLowerCase()==="yes"){ ti.output("Your character is Jiraiya the Gallant")
           } else ti.output ("Your character is Konohamaru")
         } else if (perv.toLocaleLowerCase()==="no"){
          let restinpeace2= await ti.prompt ("Does your character die?")
          if (restinpeace2.toLocaleLowerCase()==="yes"){ ti.output("Your character is Asumaaaaa (goat)")
          } else if (restinpeace2.toLocaleLowerCase()==="no"){ ti.output("Your character is Orochimaru")
          }
         }
      } else if (sensei1.toLocaleLowerCase()==="no"){
        let jinchuriki1= await ti.prompt("Is your character a Jinchuriki?")
        if (jinchuriki1.toLocaleLowerCase()==="yes"){
          let hokage1=await ti.prompt("Is your character a Hokage of Konoha?")
          if (hokage1.toLocaleLowerCase()==="yes"){ ti.output("Your character is Naruto Uzumaki")
          } else if (hokage1.toLocaleLowerCase()==="no"){ ti.output ("Your character is Gaara of the Sand")
        }
        } else if (jinchuriki1.toLocaleLowerCase()==="no"){
          let taijutsu1= await ti.prompt("Does your character use taijutsu?")
          if (taijutsu1.toLocaleLowerCase()==="yes"){ ti.output("Your character is Rock Lee")
          } else if (taijutsu1.toLocaleLowerCase()==="no"){ ti.output("Your character is THE GOAT Shikamaru")
        }
        }
      } 
    } else if (ognoog2.toLocaleLowerCase()==="ship"||ognoog2.toLocaleLowerCase()==="shippuden"){ ti.output("Your character is Sai the PainterBoy")
    }
  }
} else if (malefemale1.toLocaleLowerCase()==="female"){
  let dojornodoj2= await ti.prompt ("Does your character have dojutsu?")
  if (dojornodoj2.toLocaleLowerCase()==="yes"){ ti.output("Your character is Hinata Hyuga")
  } else if (dojornodoj2.toLocaleLowerCase()==="no"){
    let ognoog3= await ti.prompt("Is your character from OG Naruto or Shippuden?")
    if (ognoog3.toLocaleLowerCase()==="OG"){
      let Team7and10= await ti.prompt("Is your character from team 10 or team 7? (yes or no)")
      if (Team7and10.toLocaleLowerCase()==="yes"){
        let uselessbum= await ti.prompt("Is your character completely useless for the whole series?")
        if (uselessbum.toLocaleLowerCase()==="yes"){ ti.output("Your character is Sakura")
        } else if (uselessbum.toLocaleLowerCase()==="no"){ ti.output("Your character is Ino Yamanaka")
        }
      } else if (Team7and10.toLocaleLowerCase()==="no"){
        let sandvillage= await ti.prompt ("Are they from the Sunagakure (Sand Village)?")
        if (sandvillage.toLocaleLowerCase()==="yes"){ ti.output("Your character is Temari")
        } else if (sandvillage.toLocaleLowerCase()==="no"){ ti.output ("Your character is the character who got less screen time than a literal tree, Tenten")
      }
      }
    } else if (ognoog3.toLocaleLowerCase()==="Ship"||ognoog3.toLocaleLowerCase()==="Shippuden"){ ti.output("Your character is Kushina Uzumaki")
    }
}
}
} else if(maincast.toLocaleLowerCase()=== "no") {
 let malefemale2= await ti.prompt("Is your character male or female?")
  if(malefemale2.toLocaleLowerCase()==="male"){
let Dojornodoj3= await ti.prompt("Does your character have Dojutsu?")
  if(Dojornodoj3.toLocaleLowerCase()==="yes"){
      let uchiha3= await ti.prompt("Is your character from the Uchiha Clan?")
      if(uchiha3.toLocaleLowerCase()==="yes"){
        let bestgenjutsu= await ti.prompt("Is your character the best genjutsu user of all time?")
        if (bestgenjutsu.toLocaleLowerCase()==="yes"){ ti.output("Your character is Shisui Uchiha the Teleporter (and the one with Kotoamatsukami)")
        } else if (bestgenjutsu.toLocaleLowerCase()==="no"){
          let rinnegan= await ti.prompt("Does your character possess the Rinnegan?")
          if (rinnegan.toLocaleLowerCase()==="yes"){ ti.output("Your character is Madara Uchiha, one of the founders of Konoha")
          } else if (rinnegan.toLocaleLowerCase()==="no"){ ti.output("Your character is Fugaku Uchiha")
        } 
        }
      } else if (uchiha3.toLocaleLowerCase()==="no"){
        let hyugaside= await ti.prompt("Is your character part of the Hyuga Clan?")
        if (hyugaside.toLocaleLowerCase()==="yes"){
          let father= await ti.prompt("Is your character a father?")
          if (father.toLocaleLowerCase()==="yes"){ ti.output("Your character is Hiashi Hyuga")
          } else if (father.toLocaleLowerCase()==="no"){ ti.output("Your character is Tokuma Hyuga")
        }
        } else if (hyugaside.toLocaleLowerCase()==="no"){
          let Otsutsuki1= await ti.prompt("Is your character part of the Ōtsutsuki Clan?")
          if (Otsutsuki1.toLocaleLowerCase()==="yes"){
            let sharbyak= await ti.prompt("Does your character have the Sharingan or the Byakugan?")
            if (sharbyak.toLocaleLowerCase()==="sharingan"){ ti.output("Your character is Indra Ōtsutsuki")
            } else if (sharbyak.toLocaleLowerCase()==="byakugan"){ ti.output("Your character is Hamura Ōtsutsuki")
          }
            }
        }
      }
    } else if (Dojornodoj3.toLocaleLowerCase()==="no"){
      let akatsuki1= await ti.prompt("Is your character part of the Akatsuki?")
      if (akatsuki1.toLocaleLowerCase()==="yes"){
        let zomcomandzetsu= await ti.prompt("Is your character part of the 'Zombie Combo' (Hidan and Kakuzu) or are they Zetsu? (either one is a yes)")
        if (zomcomandzetsu.toLocaleLowerCase()==="yes"){
          let zomcom= await ti.prompt("Is your character part of the Zombie Combo")
          if (zomcom.toLocaleLowerCase()==="yes"){
            let jashin= await ti.prompt("Is your character a follower of Jashin?")
            if (jashin.toLocaleLowerCase()==="yes"){ ti.output("Your character is Hidan")
            } else if (jashin.toLocaleLowerCase()==="no"){ ti.output("Your character is Kakazu (the money launderer)")
          }
        } else if (zomcom.toLocaleLowerCase()==="no"){ ti.output("Your character is Zetsu (White+Black Zetsu Akatsuki Form)")
        }
        } else if (zomcomandzetsu.toLocaleLowerCase()==="no"){
          let artduo= await ti.prompt("Is your character part of the art duo (Sasori and Deidara)?")
          if (artduo.toLocaleLowerCase()==="yes"){
            let explosion= await ti.prompt("Does your character think art is an explosion?")
            if (explosion.toLocaleLowerCase()==="yes"){ ti.output("Your character is Deidara")
            } else if (explosion.toLocaleLowerCase()==="no"){ ti.output("Your character is Sasori (the bum who lost to Sakura because of plot armor hahahaaa)")
          }
          } else if (artduo.toLocaleLowerCase()==="no"){ ti.output("Your character is Kisame Hoshigaki (Might Guy doesnt even remember bro lol)")
          }
        }
      }
    }
  }
}