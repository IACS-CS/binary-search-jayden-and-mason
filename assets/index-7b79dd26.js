true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const style = '';

(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".text-interface{padding-left:1em;padding-right:1em;width:100%;height:100%;--offwhite: var(--ti-offwhite, #aaa);--grey: var(--ti-grey, #888);--black: var(--ti-black, #222);--white: var(--ti-white, #fefefe);--font: var(--ti-font, Roboto, sans-serif);--output-font: var(--ti-output-font, monospace);background-color:var(--black, #222);color:var(--white, #fefefe);position:sticky;top:0;max-height:var(--ti-max-height, 90vh);overflow-y:scroll;margin-right:auto;margin-left:auto;max-width:var(--ti-max-width, 28em);min-width:var(--ti-min-width, 20em);font-family:var(--font, Roboto, sans-serif);font-size:var(--ti-font-size, 1em)}.text-interface h2{position:sticky;top:0;background-color:var(--black, #222);margin:0;padding-top:1em;padding-bottom:1em;border-bottom:1px dotted var(--grey, #888)}.text-interface .input-wrap{border:1px dotted var(--grey, #888);padding:1em;margin-top:1em;margin-bottom:1em;opacity:.1;font-family:var(--output-font, monospace)}.text-interface .input-wrap.active{opacity:1}.text-interface .placeholder{font-style:italic;color:var(--offwhite, #aaa)}.output img{margin:1em;max-width:80%;animation:fade-in .5s}.output{font-family:var(--output-font, monospace)}.output.echo{color:var(--ti-echo-color, var(--offwhite, #aaa));font-family:var(--echo-font, var(--output-font, monospace))}@keyframes fade-in{0%{opacity:0;transform:scale(0);transform-origin:top left}to{opacity:1;transform:scale(1)}}.text-interface::-webkit-scrollbar{width:8px}.text-interface::-webkit-scrollbar-track{background:var(--ti-scroll-track-color, var(--black, #222));border-radius:10px}.text-interface::-webkit-scrollbar-thumb{background-color:var(--ti-scroll-thumb-color, var(--grey, #888));border-radius:10px;border:2px solid var(--black, #222)}.text-interface::-webkit-scrollbar-thumb:hover{background-color:var(--ti-scroll-thumb-hover-color, #555)}.text-interface::-webkit-scrollbar-thumb:active{background-color:var(--ti-scroll-thumb-active-color, #333)}")),document.head.appendChild(t);}}catch(o){console.error("vite-plugin-css-injected-by-js",o);}})();
const r = ["yes", "yeah", "yep", "yup", "true", "t", "y", "aye", "yup"], o = ["no", "n", "false", "f", "nope", "nah"];
class a {
  constructor(t = document.body, e = "Text Interface") {
    this.listener = null, this.outputAnimationLength = 800, this.outputDelay = 300, this.shouldStealFocus = !1, this.scrollOptions = {
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    }, this.outputQueue = [], this.div = document.createElement("div"), this.div.classList.add("text-interface"), t.appendChild(this.div), this.div.innerHTML = `
      <h2 class="ti-title">${e}</h2>
      <div class="output">
      </div>
      <div class="input-wrap">
          <div 
             class="input" 
             contenteditable 
             placeholder="Type here...">
          </div>
          <div class="placeholder">Type and hit return...</div>
      </div>
    `, this.inputWrap = this.div.querySelector(".input-wrap"), this.inputEl = this.div.querySelector(".input"), this.outputEl = this.div.querySelector(".output"), this.placeholderEl = this.div.querySelector(
      ".placeholder"
    ), this.setupInputListener(), this.shouldStealFocus && this.inputEl.focus();
  }
  setTitle(t) {
    this.div.querySelector(".ti-title").textContent = t;
  }
  clear() {
    this.outputEl.innerHTML = "";
  }
  setScrollOptions(t) {
    this.scrollOptions = t;
  }
  async readChoice(t, e = "Choose one of the following:", i = "You must choose one of the options!") {
    this.output(e);
    for (let u = 0; u < t.length; u++)
      this.output(`${u + 1}. ${t[u]}`);
    let s = await this.readText();
    if (t.indexOf(s) > -1)
      return s;
    if (s = s.replace(/\D/g, ""), s != "") {
      let u = Number(s);
      if (!isNaN(u) && u <= t.length && u > 0)
        return t[Math.floor(u) - 1];
    }
    return this.output(i), await this.readChoice(t, e, i);
  }
  async readYesOrNo(t = "Say yes or no!") {
    let e = await this.readText();
    return e = e.toLowerCase(), e = e.replace(/\s+/, ""), r.indexOf(e) > -1 ? !0 : o.indexOf(e) > -1 ? !1 : (this.output(t), await this.readYesOrNo(t));
  }
  async readNumber(t = "Please type a number") {
    let e = await this.readText(), i = Number(e);
    return isNaN(i) ? (this.output(t), this.readNumber(t)) : i;
  }
  async readInteger(t = "Please type a whole number") {
    let e = await this.readText(), i = Number(e);
    return isNaN(i) || i % 1 != 0 ? (this.output(t), this.readInteger(t)) : i;
  }
  async readIntegerInRange(t, e, i = `Please type a whole number within the range of ${t} and ${e}`) {
    let s = await this.readText(), n = Number(s);
    return isNaN(n) || n % 1 != 0 || n > e || n < t ? (this.output(i), await this.readIntegerInRange(t, e, i)) : n;
  }
  async readNumberInRange(t, e, i = `Please type a whole number within the range of ${t} and ${e}`) {
    let s = await this.readText(), n = Number(s);
    return isNaN(n) || n > e || n < t ? (this.output(i), await this.readNumberInRange(t, e, i)) : n;
  }
  readText() {
    return this.shouldStealFocus && this.inputEl.focus(), this.inputWrap.classList.add("active"), this.inputWrap.scrollIntoView(
      this.scrollOptions
    ), new Promise((t, e) => {
      this.listener = t;
    });
  }
  prompt(t) {
    return this.output(t), this.readText();
  }
  promptYesOrNo(t) {
    return this.output(t), this.readYesOrNo();
  }
  promptNumber(t, e) {
    return this.output(t), this.readNumber(e);
  }
  promptInteger(t, e) {
    return this.output(t), this.readInteger(e);
  }
  promptNumberInRange(t, e, i, s) {
    return this.output(t), this.readNumberInRange(e, i, s);
  }
  promptIntegerInRange(t, e, i, s) {
    return this.output(t), this.readIntegerInRange(e, i, s);
  }
  showElement(t) {
    this.outputting ? this.outputQueue.push(["element", t]) : (this.outputting = !0, this.outputEl.appendChild(t), t.scrollIntoView(this.scrollOptions), setTimeout(() => {
      this.outputting = !1, this.doNextOutput();
    }, this.outputDelay));
  }
  showHTML(t) {
    let e = document.createElement("div");
    e.innerHTML = t, this.showElement(e);
  }
  showImage(t, e = "An image") {
    let i = document.createElement("img");
    i.setAttribute("src", t), i.setAttribute("alt", e), this.showElement(i);
  }
  output(t, e = !1) {
    if (t = "" + t, this.outputting)
      this.outputQueue.push(["text", t, e]);
    else {
      let i = document.createElement("div");
      if (i.classList.add("output"), e && i.classList.add("echo"), !this.outputAnimationLength || e)
        i.textContent = t;
      else {
        this.outputting = !0;
        let s = this.outputAnimationLength / t.length;
        const n = () => {
          if (t[0] === `
`) {
            const u = document.createElement("br");
            i.appendChild(u);
          } else {
            const u = document.createTextNode(t[0] || "");
            i.appendChild(u);
          }
          t = t.substring(1), t.length ? setTimeout(n, s) : (this.outputting = !1, this.doNextOutput());
        };
        setTimeout(n, this.outputDelay);
      }
      this.outputEl.appendChild(i), i.scrollIntoView(this.scrollOptions);
    }
  }
  doNextOutput() {
    if (this.outputQueue.length) {
      let t = this.outputQueue[0];
      this.outputQueue = this.outputQueue.slice(1);
      let e = t[0], i = t.slice(1);
      e == "text" ? this.output(...i) : this.showElement(...i);
    }
  }
  setupInputListener() {
    this.inputEl.addEventListener("keyup", (t) => {
      if (t.code == "Enter" || t.key == "Enter") {
        let i = this.inputEl.textContent.replace(/\n$/, "");
        this.output(i, !0), this.listener && (this.listener(i), this.listener = null), this.inputWrap.classList.remove("active"), setTimeout(() => {
          this.inputEl.textContent = "";
        }, 1);
      }
    }), this.placeholderEl.addEventListener("click", () => this.inputEl.focus());
  }
}

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new a(app, "Guess my naruto charecter");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
if (name.toLocaleLowerCase()==="the sage of six paths"||name.toLocaleLowerCase()==="sage of six paths") ti.output("Sage of the Six Paths thank you for being the goat and starting Ninshu");
ti.output("Welcome to the Naruto character guessing game!");
ti.output("you will pick a charecter from the list below and I will try to guess it");
// add image of naruto charecters and add a list of thier names 
let maincast = await ti.prompt("are they part of the main cast?");
if(maincast.toLocaleLowerCase()=== "yes"){
  let malefemale1= await ti.prompt("are they male or female");
  if(malefemale1.toLocaleLowerCase()==="male"){
let Dojornodoj1= await ti.prompt("do they have a Dojutsu");
  if(Dojornodoj1.toLocaleLowerCase()==="yes"){
      let ognoog1= await ti.prompt ("Are they from OG or Ship");
      if(ognoog1.toLocaleLowerCase()=== "og"){
        let uchiha1 = await ti.prompt ("Is your character part of the Uchiha?");
        if(uchiha1.toLocaleLowerCase()==="yes"||uchiha1.toLocaleLowerCase()==="uchiha"){
          let rook1 = await ti.prompt ("Is your character part of the Rookie 9?");
          if(rook1.toLocaleLowerCase()==="yes"){ ti.output ("Your character is Sasuke");
          } else if (rook1.toLocaleLowerCase()==="no") ti.output ("Your character is Itachi");
        } else if (uchiha1.toLocaleLowerCase()==="no");let hyuga= await ti.prompt ("do they have the Byakugan");
        if (hyuga.toLocaleLowerCase()==="yes"){
          ti.output("Your character is Neji");
        } else if (hyuga.toLocaleLowerCase()=== "no") {
          ti.output("Your character is Kakashi");
        }
      } else if (ognoog1.toLocaleLowerCase()==="ship"||ognoog1.toLocaleLowerCase()==="shippuden"){
        let uchiha2 = await ti.prompt ("Is your character part of the Uchiha");
        if (uchiha2.toLocaleLowerCase()==="yes"){ ti.output ("Your character is Tobi/Obito");
        } else if (uchiha2.toLocaleLowerCase()==="no") ti.output ("Your character is Pain/Nagato");//ai helped us with a minor mistake after the to.localelowercase -->()
      }
    } else if (Dojornodoj1.toLocaleLowerCase()==="no"){
      let ognoog2= await ti.prompt ("Are they from OG or Ship");
      if(ognoog2.toLocaleLowerCase()=== "og"){
       let sensei1= await ti.prompt ("Is your character a sensei (includes Konohamaru)?");
        if (sensei1.toLocaleLowerCase()==="yes"){
         let perv= await ti.prompt ("Is your character a pervy old man (or a pervy young man)?");
         if (perv.toLocaleLowerCase()==="yes"){
           let restinpeace= await ti.prompt ("Does your character die?");
           if (restinpeace.toLocaleLowerCase()==="yes"){ ti.output("Your character is Jiraiya the Gallant");
           } else ti.output ("Your character is Konohamaru");
         } else if (perv.toLocaleLowerCase()==="no"){
          let restinpeace2= await ti.prompt ("Does your character die?");
          if (restinpeace2.toLocaleLowerCase()==="yes"){ ti.output("Your character is Asumaaaaa (goat)");
          } else if (restinpeace2.toLocaleLowerCase()==="no"){ ti.output("Your character is Orochimaru");
          }
         }
      } else if (sensei1.toLocaleLowerCase()==="no"){
        let jinchuriki1= await ti.prompt("Is your character a Jinchuriki?");
        if (jinchuriki1.toLocaleLowerCase()==="yes"){
          let hokage1=await ti.prompt("Is your character a Hokage of Konoha?");
          if (hokage1.toLocaleLowerCase()==="yes"){ ti.output("Your character is Naruto Uzumaki");
          } else if (hokage1.toLocaleLowerCase()==="no"){ ti.output ("Your character is Gaara of the Sand");
        }
        } else if (jinchuriki1.toLocaleLowerCase()==="no"){
          let taijutsu1= await ti.prompt("Does your character use taijutsu?");
          if (taijutsu1.toLocaleLowerCase()==="yes"){ ti.output("Your character is Rock Lee");
          } else if (taijutsu1.toLocaleLowerCase()==="no"){ ti.output("Your character is THE GOAT Shikamaru");
        }
        }
      } 
    } else if (ognoog2.toLocaleLowerCase()==="ship"||ognoog2.toLocaleLowerCase()==="shippuden"){ ti.output("Your character is Sai the PainterBoy");
    }
  }
} else if (malefemale1.toLocaleLowerCase()==="female"){
  let dojornodoj2= await ti.prompt ("Does your character have dojutsu?");
  if (dojornodoj2.toLocaleLowerCase()==="yes"){ ti.output("Your character is Hinata Hyuga");
  } else if (dojornodoj2.toLocaleLowerCase()==="no"){
    let ognoog3= await ti.prompt("Is your character from OG Naruto or Shippuden?");
    if (ognoog3.toLocaleLowerCase()==="OG"){
      let Team7and10= await ti.prompt("Is your character from team 10 or team 7? (yes or no)");
      if (Team7and10.toLocaleLowerCase()==="yes"){
        let uselessbum= await ti.prompt("Is your character completely useless for the whole series?");
        if (uselessbum.toLocaleLowerCase()==="yes"){ ti.output("Your character is Sakura");
        } else if (uselessbum.toLocaleLowerCase()==="no"){ ti.output("Your character is Ino Yamanaka");
        }
      } else if (Team7and10.toLocaleLowerCase()==="no"){
        let sandvillage= await ti.prompt ("Are they from the Sunagakure (Sand Village)?");
        if (sandvillage.toLocaleLowerCase()==="yes"){ ti.output("Your character is Temari");
        } else if (sandvillage.toLocaleLowerCase()==="no"){ ti.output ("Your character is the character who got less screen time than a literal tree, Tenten");
      }
      }
    } else if (ognoog3.toLocaleLowerCase()==="Ship"||ognoog3.toLocaleLowerCase()==="Shippuden"){ ti.output("Your character is Kushina Uzumaki");
    }
}
}
} else if(maincast.toLocaleLowerCase()=== "no") {
 let malefemale2= await ti.prompt("Is your character male or female?");
  if(malefemale2.toLocaleLowerCase()==="male"){
let Dojornodoj3= await ti.prompt("Does your character have Dojutsu?");
  if(Dojornodoj3.toLocaleLowerCase()==="yes"){
      let uchiha3= await ti.prompt("Is your character from the Uchiha Clan?");
      if(uchiha3.toLocaleLowerCase()==="yes"){
        let bestgenjutsu= await ti.prompt("Is your character the best genjutsu user of all time?");
        if (bestgenjutsu.toLocaleLowerCase()==="yes"){ ti.output("Your character is Shisui Uchiha the Teleporter (and the one with Kotoamatsukami)");
        } else if (bestgenjutsu.toLocaleLowerCase()==="no"){
          let rinnegan= await ti.prompt("Does your character possess the Rinnegan?");
          if (rinnegan.toLocaleLowerCase()==="yes"){ ti.output("Your character is Madara Uchiha, one of the founders of Konoha");
          } else if (rinnegan.toLocaleLowerCase()==="no"){ ti.output("Your character is Fugaku Uchiha");
        } 
        }
      } else if (uchiha3.toLocaleLowerCase()==="no"){
        let hyugaside= await ti.prompt("Is your character part of the Hyuga Clan?");
        if (hyugaside.toLocaleLowerCase()==="yes"){
          let father= await ti.prompt("Is your character a father?");
          if (father.toLocaleLowerCase()==="yes"){ ti.output("Your character is Hiashi Hyuga");
          } else if (father.toLocaleLowerCase()==="no"){ ti.output("Your character is Tokuma Hyuga");
        }
        } else if (hyugaside.toLocaleLowerCase()==="no"){
          let Otsutsuki1= await ti.prompt("Is your character part of the Ōtsutsuki Clan?");
          if (Otsutsuki1.toLocaleLowerCase()==="yes"){
            let sharbyak= await ti.prompt("Does your character have the Sharingan or the Byakugan?");
            if (sharbyak.toLocaleLowerCase()==="sharingan"){ ti.output("Your character is Indra Ōtsutsuki");
            } else if (sharbyak.toLocaleLowerCase()==="byakugan"){ ti.output("Your character is Hamura Ōtsutsuki");
          }
            }
        }
      }
    } else if (Dojornodoj3.toLocaleLowerCase()==="no"){
      let akatsuki1= await ti.prompt("Is your character part of the Akatsuki?");
      if (akatsuki1.toLocaleLowerCase()==="yes"){
        let zomcomandzetsu= await ti.prompt("Is your character part of the 'Zombie Combo' (Hidan and Kakuzu) or are they Zetsu? (either one is a yes)");
        if (zomcomandzetsu.toLocaleLowerCase()==="yes"){
          let zomcom= await ti.prompt("Is your character part of the Zombie Combo");
          if (zomcom.toLocaleLowerCase()==="yes"){
            let jashin= await ti.prompt("Is your character a follower of Jashin?");
            if (jashin.toLocaleLowerCase()==="yes"){ ti.output("Your character is Hidan");
            } else if (jashin.toLocaleLowerCase()==="no"){ ti.output("Your character is Kakazu (the money launderer)");
          }
        } else if (zomcom.toLocaleLowerCase()==="no"){ ti.output("Your character is Zetsu (White+Black Zetsu Akatsuki Form)");
        }
        } else if (zomcomandzetsu.toLocaleLowerCase()==="no"){
          let artduo= await ti.prompt("Is your character part of the art duo (Sasori and Deidara)?");
          if (artduo.toLocaleLowerCase()==="yes"){
            let explosion= await ti.prompt("Does your character think art is an explosion?");
            if (explosion.toLocaleLowerCase()==="yes"){ ti.output("Your character is Deidara");
            } else if (explosion.toLocaleLowerCase()==="no"){ ti.output("Your character is Sasori (the bum who lost to Sakura because of plot armor hahahaaa)");
          }
          } else if (artduo.toLocaleLowerCase()==="no"){ ti.output("Your character is Kisame Hoshigaki (Might Guy doesnt even remember bro lol)");
          }
        }
      } else if (akatsuki1.toLocaleLowerCase()==="no"){
        let sensei2= await ti.prompt("Is your character a Sensei in Konoha?");
        if (sensei2.toLocaleLowerCase()==="yes"){
          let academy1= await ti.prompt("Has your character taught at the Konoha academy?");
          if (academy1.toLocaleLowerCase()==="yes"){ ti.output("Your character is Iruka");
          } else if (adacemy1.toLocaleLowerCase()==="no"){ ti.output("Your character is Might Guy");
        }
        } else if (sensei2.toLocaleLowerCase()==="no"){
          let previoushokage= await ti.prompt("Is your character a previous Hokage?");
          if (previoushokage.toLocaleLowerCase()==="yes"){
            let senjuclan= await ti.prompt("Is your character part of the Senju Clan?");
            if (senjuclan.toLocaleLowerCase()==="yes"){
              let uchihahater= await ti.prompt("Does your character hate the Uchiha Clan?");
              if (uchihahater.toLocaleLowerCase()==="yes"){ ti.output("Your character is Tobirama Senju");
              } else if (uchihahater.toLocaleLowerCase()==="no"){ ti.output("Your character is Hashirama Senju");
            }
            } else if (senjuclan.toLocaleLowerCase()==="no"){
              let evilman= await ti.prompt("Is your character the most evil person in the entire series?");
              if (evilman.toLocaleLowerCase()==="yes"){ ti.output("Your character is Danzo");
              } else if (evilman.toLocaleLowerCase()==="no"){ ti.output("Your character is Minato Namikaze");
            }
            }
          } else if (previoushokage.toLocaleLowerCase()==="no"){
          let darui= await ti.prompt("Is your character Darui?");
          if (darui.toLocaleLowerCase()==="yes"){ ti.output("Your character is Darui");
          } else if (darui.toLocaleLowerCase()==="no"){
            let omoi= await ti.prompt("Is your character Omoi?");
            if (omoi.toLocaleLowerCase()==="yes"){ ti.output("Your character is Omoi");
            } else if (omoi.toLocaleLowerCase()==="no"){ 
              let killerbee= await ti.prompt("Is your character Killer Bee?");
              if (killerbee.toLocaleLowerCase()==="yes"){ ti.output("Your character is Killer Bee");
              } else if (killerbee.toLocaleLowerCase()==="no"){ ti.output("Your character is Zabuza");
            }
          }
          }
        }
    }
  }
} else if (malefemale2.toLocaleLowerCase()==="female"){
  let dojornodoj4= await ti.prompt("Does your character have Dojutsu?");
  if (dojornodoj4.toLocaleLowerCase()==="yes"){
    let Otsutsuki2= await ti.prompt("Is your character part of the Ōtsutsuki Clan?");
    if (Otsutsuki2.toLocaleLowerCase()==="yes"){ ti.output("Your character is Kaguya Ōtsutsuki");
    } else if (Otsutsuki2.toLocaleLowerCase()==="no"){ ti.output("Your character is Hanabi Hyuga");
  }
  } else if (dojornodoj4.toLocaleLowerCase()==="no"){
    let ognoog4= await ti.prompt("Is your character from OG Naruto or Shippuden");
    if (ognoog4.toLocaleLowerCase()==="og"){
      let hokage2= await ti.prompt("Is your character a former Hokage?");
      if (hokage2.toLocaleLowerCase()==="yes"){ ti.output("Your character is Tsunade");
      } else if (hokage2.toLocaleLowerCase()==="no"){ ti.output("Your character is Haku (haha Haku is actually a boy I tricked you)");
    }
    } else if (ognoog4.toLocaleLowerCase()==="ship"||ognoog4.toLocaleLowerCase()==="shippuden"){
      let taka= await ti.prompt("Are they a part of the group The Taka?");
      if (taka.toLocaleLowerCase()==="yes"){ ti.output("Your character is Karin");
      } //copilot helped fix an error with curly brackets
    } else if (taka.toLocaleLowerCase()=="no"){ ti.output("Your character is Konan of the Akatsuki");
    }
  }
}
}
}
