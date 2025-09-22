import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess my naruto charecter");
let playing = true;

let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
ti.outputAnimationLength = 0;
if (
  name.toLocaleLowerCase() === "the sage of six paths" ||
  name.toLocaleLowerCase() === "sage of six paths"
)
  ti.output(
    "Sage of the Six Paths thank you for being the goat and starting Ninshu"
  );
while (playing) {
  ti.output("Welcome to the Naruto character guessing game!");
  ti.output(
    "you will pick a charecter from the list below and I will try to guess it"
  );
  ti.output("Sasuke");
  ti.showImage(
    "https://upload.wikimedia.org/wikipedia/en/4/42/SasukeKishimoto.jpg"
  );
  ti.output("Itachi");
  ti.showImage(
    "https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg"
  );
  ti.output("Neji");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStOEzSx_WW1fOk82xwa37PWPo_1vv6IEYqMhZGA3bjkuN91KlAlmqeVscXJ79riqYnnTbUUgnpQp6mysDry7DdWqVag9TFOvh-MwqSw19DdQ"
  );
  ti.output("Kakashi");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEx6yFsp6QjMIrbfm12nNZF-v2Y6t6ID6lW5RH7kDMP8KCcoqOmW7g9Iz9S2N9MMTvJzeN2GqMh6RRHgaHr0rRP57MdlTem0nL_shTvkU"
  );
  ti.output("Tobi/Obito");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV2QTkVnE90xi2gtGS8ZbDrugfhkc6rj9SAOho7lNeEoZ-kb00F0agzXxw0jpwrBdaICTwiayB7XWG8HuKEQpGd_DrrjohwcJeD5zaFch"
  );
  ti.output("Pain/Nagato");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITdpQPwknjR5_cIJ8XjGuIq1KWjaSQ52Ob8HR3GB2YyK7Bn26v2d4kolNFrFbMT3tDgngzFXfA8UJEfJxUWnxhvf-WtuuqQCtNlw1PT_W"
  );
  ti.output("Jiraiya the Gallant");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECCUDEC4Cxv3wMFxeHU-XCDNmlp6SfdtH0M4ODmB_6Pgib7xtQcTg9cpLShubKTq3UtCJPXHzMrUOAgcZdwm5d6iNHKPb-Vlwk19Tb_oXdQ"
  );
  ti.output("Konohamaru");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl3J2d8jVR08BcTH12kYP_InLhiO4kuhO3BuTe6eV3S9A7eEowwSTpXX5s0lClprt9wkYHtZ0y-7tgEWKNoAqpmFdsJSc2IuGowxZqzv6A"
  );
  ti.output("Asuma");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVxQSc4_rH-mTvj11kNd9jcEF009_QB09GsM_KSHHQHJDntVv6WTNvdI6CkCJUK8kHKN-tY6_aWTeEuuNRKPcDL0mGzPH1dm3oZjevd7GN"
  );
  ti.output("Orochimaru");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbri-kYohKtxSo-ePR9x-66VT98gm0dP2shSsjIXnM1oj-mAgIIuAVDkf6qPR0hh4Bw5bgsuZ5vUhCfGVf7IFXxqklVVv_HbmzJ7_7qlz-ww"
  );
  ti.output("Gaara of the Sand");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZgMd00TPsIbSQwxgU3c6a4A0gW6R17I5wUmn3w4-ICNNyCaDBw2FN6PKowBJBMIiY7V8Avc-xz0HiEX2dIDpUojx4V3OyxfrSLuse-TLWLA"
  );
  ti.output("Rock Lee");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvkHzNjUSss8N9nHlIFTokqJyz8Z-hZ2UQXFcxmesNFHAzqu3J24Sj084ouhwSYfkdXRT-w19AIS2vIcrpwJZXjubUoo6jkNhrMxtrrqEX"
  );
  ti.output("Shikamaru");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJeH8vQgO2AUe1olWc70YdtM7tjLTTfl14mcm5IedYHy7e5ryg4SJkONgH86MIdbM9JDSlwOh9-F4IstpSgAcCoSDa41i32y0OD4UTlqTO"
  );
  ti.output("Sai ");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/0/07/Sai_Infobox.png/revision/latest/scale-to-width-down/300?cb=20180314110836"
  );
  ti.output("Hinata Hyuga");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png/revision/latest/scale-to-width-down/300?cb=20141010104729"
  );
  ti.output("Sakura");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwL9xs_0l9lpyYCqVZ7vg-_QF0y49vvPnrvAOMuLipOa9wZTBLlHhcVaduMo1pgY5qD_a9oNIhUCKDX69Z6St4aqdzoO55uXXdmDDC5_7"
  );
  ti.output("Ino Yamanaka");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-NdSsLRUswBzJLKoXmtPLt-Ig36q-X240Q&s"
  );
  ti.output("Temari");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6QfnTe-NBDyL3Yo85ejb1Yzw9GY8WbOxQblyrbVUDjykPfbwXoQw5T58a12mAgiS9fjNhCZim1uHa2rPQlqt_3XWfES_l6l-kZkS3GFua"
  );
  ti.output("Tenten");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/d/da/Tenten_Part_1.png/revision/latest/scale-to-width-down/300?cb=20180510203032"
  );
  ti.output("Kushina Uzumaki");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvsj--98qhI_uu4DIDPjdxFfapsU4P-XIgwfr6Jl5fEWSqkkCUVAeEY3RJfvK9551yDXzkwTL308gTIi2hPnohN8DYbMNobZsMLNKZDiebw"
  );
  ti.output("Shisui Uchiha");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5sSuBmGlBRHj4R64Z1d_rh_4QdfWv6Sd75s4787_FiMIygiCz47_pL_OCAmHDyV9THJCCXQ1kRQbngBlnl2sd11lCzQRPCQiotdTfrChDw"
  );
  ti.output("Madara Uchiha");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScfJnaI5d6K7nKbOY9yeKDcp1MucpI2N-m_HaC_t13jtl2fD8VuBazWhQjortn831hdFq_vcsOyOXp_bU-7GIFTWNdKin9uNFcNhT7W-QxXQ"
  );
  ti.output("Fugaku Uchiha");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/f/f2/Fugaku.png/revision/latest/scale-to-width-down/300?cb=20180502064054"
  );
  ti.output("Hiashi Hyuga");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv43wDvKJZ9SOX_b-VNwcL1N0t7piO1cb_l2BEt5eIDix4tsqu7AJnPSwO_PSw1BwZJV_kcMiFMYQoe60zy9VRrZF5zRo9sEgEVWvzu2U2lw"
  );
  ti.output("Tokuma Hyuga");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/d/d4/Tokuma_Hy%C5%ABga.png/revision/latest/scale-to-width-down/300?cb=20191007150753"
  );
  ti.output("Indra Ōtsutsuki");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSI1YX60k4EVSWgsIzavzZdi_kEibqNYundgRfAyHtxFVGt2_KQfTARJH2d-b6_XfMdYrRdahM-iO3D1c5MNBAeP9GYcjUftM36IcCb_wF2"
  );
  ti.output("Hamura Ōtsutsuki");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAitfI59_yEzaXu6me62NyjR_dtbPTtyV2kUMSavN39l_uME4UMRmNl5WS5vevpXTVTuZ7aNtDEw-Ts3c_ICwrzu6IUvr1yFeHdyKIJIk8gA"
  );
  ti.output("Hidan");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5Ws7BryO5QX_Emrr35VaEthKhTddbIuTDjxmRi1wU9pevWKXn_HScziT44kGEJd9XFYstJo-dBKJQGGHUfKpfljDXE6W0wlt9WrkgGkYc"
  );
  ti.output("Kakazu");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQ3V9fNc4KeZsdY2SQrvc1Z9Je19wQmNnKsgwexVSyWkPgtpjjexwvMHGO57IbJIl_3EvZs81ciyCBYuTRAjTRyD2e8NKqH-crj7lC4nrg"
  );
  ti.output("Zetsu");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWBpGI2Q5FsJVhtIsBXBrfoFpW3qdCvKtLyMcw3FFlgYRwZipD93Ag5vd1_ij5BQI_an-2R7-Qf1uJMMySpRqOm8sylz3phQIcWnXGjx1C1Q"
  );
  ti.output("Deidara");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4IZYz0gYWCWJRWPcFBv6errhjR7Vbzb08eLjGa_zlmXazaeuzDikiJyUOmDNLaXy5CUh5fNeXv90JqpJbXXg8R_YLtuVv7q3MaAYTQPli"
  );
  ti.output("Sasori");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rQLQa3hICAPS9DuaN-iLMzBDONsDZgs4Raiu2xudwrgm4uHE2_CEoRc0VdvqaX5Nu4Qr1mWyGWmiUcsEfqQtSVUexG-jorO09Vbgsqco7g"
  );
  ti.output("Kisame Hoshigaki");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQBp-RH0ZdpVY8TuRa-Wt0KC0hvJwxacVTlOhmDqerK-Z5Z5TRUB-_5TQgpIPnMZy9Eap_P7lAJxnHmrj3OCIeooyu0oCGP9Eb5ilhtPFF"
  );
  ti.output("Iruka");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpj05IpMa5UUKWw5dqvbyqKoWioVxV9HtYR_vfdYINo3TSjtbTiA3VUVIGKRPi_7elol8nWkyrU-KKVndGqbqCN50MYdHRhnaRi6eF1HpPcQ"
  );
  ti.output("Might Guy");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQq1vLt9M-QfhqHgEzZ3g9DiSijNX_IJdSmXdcQob3vEXteH273cIsFIgFFU2IrV6bJTITLketlVANILJf796ibFqm-60p2-dvCzG8S8fuaIA"
  );
  ti.output("Tobirama Senju");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XFF3TPSYwKSIW6Q9JpLxKng6jnz-7saMzzDdj4JhNIIIuFSFAo9WgK8dlo4zIbUaBH6aakAF95Wzmv6vG4OJvjEwbAL23zt-u8g6H0YD"
  );
  ti.output("Hashirama Senju");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkXqZAnu3mrvp93nJ5XfTfKDplwrNLvIlYHwNdTNpKDwvR7nOBDjkOiYs3mU2m4LYWCwpeoLF126AtysseesejFNdAQ5SUfeD9csOnWw9m"
  );
  ti.output("Danzo");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCRaBoQY9z3aFkYkBL1nb6rDkDBNpFrL2bYRZLDvu1wykUXb7s-LUdTC7UAiR5k2x14rKSpviFWAdZDjaQfwfjWhU5ax7lnuIFeOHOxYjXOA"
  );
  ti.output("Minato Namikaze");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMB_eLRphmxtrxm6rogxzHCVLENzhgFk_mxibXUGdf2D611BzyoIukahYL-es_SOPwn8vWGvxE01NspTBhIqsg630HGGeJkzwlijD2Y2El"
  );
  ti.output("Darui");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4iD5CHFUSf-xFWTVxE_Qf5vBUUeA6_nFhQKsp1phCkD2ypm-5X9zD29Mos5O-y-8trzex6kZHjRmp7KubokPP_9gixvep8FZoa3eQb8q8"
  );
  ti.output("Omoi");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/9/9f/Omoi_Part_II.png/revision/latest/scale-to-width-down/300?cb=20200919231029"
  );
  ti.output("Killer Bee");
  ti.showImage(
    "https://static.wikia.nocookie.net/naruto/images/6/63/Killer_B.png/revision/latest/scale-to-width-down/300?cb=20180425141557"
  );
  ti.output("Zabuza");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSV5RIsH3fcL6XDpekv49JM1QEps7573rbmlsQfpARwGqtTp_DVaOqCdciH3j1vdrnf5c149FtIVbFNlq_tEY3hrGDeBtZ23h_SB-T31b9F"
  );
  ti.output("Kaguya Ōtsutsuki");
  ti.showImage(
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfcJF4lhhK0T8_hKm9BRK9YnR1_FGYycXIdqanmSjo7jKF5G0M9RVhNeti3FQ5abzb7elGirXAjfQek-uZo69BZdlErMeJp_V-78ecxHk5"
  );
  ti.output("Hanabi Hyuga");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Mcw-dVLl26r87a5dpEiNh61WuesalnwFuA&s"
  );
  ti.output("Tsunade");
  ti.showImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbDBo4LwqwLUleweIZ4VZHbDEyreeudx5Rg&s"
  );
  ti.output("Haku");
  ti.showImage(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5bQwpBaXY8Zi_V7qPTyzkHMCQsryYBzXFU3fFsj1Mw0YU6z5PT3brlcm8mj7lDZGbuJNbPCey-lnieaZSCk5TuK-rSfdWQMmszU0SkwzP"
  );
  ti.output("Karin");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGfxOghJujwkFH2LSuwlrQgOuCL4sJ44KmxsPEmDGIodf9sMP--iuz4lf8CPWt1wEJRL8H869SEjUAe8hcvoYICPRzPu2ktCLmkKqnnaGZJg"
  );
  ti.output("Konan");
  ti.showImage(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlxDU0QWpHWf2vSrd2exMw78aPX_cf8qAt_gOgX3k5pX5RAo8Dfv1xKbbsQynYpOBEYcbigqTss5EH1sJ6eQBJjG641XpDGQahC-LRc_YZqQ"
  );
  // used copilot to tell me how to add images
  ti.outputAnimationLength = 100;
  //copilot helped me to figure out the aniation length
  let maincast = await ti.prompt("are they part of the main cast?");
  if (maincast.toLocaleLowerCase() === "yes") {
    let malefemale1 = await ti.prompt("are they male or female");
    if (malefemale1.toLocaleLowerCase() === "male") {
      let Dojornodoj1 = await ti.prompt("do they have a Dojutsu");
      if (Dojornodoj1.toLocaleLowerCase() === "yes") {
        let ognoog1 = await ti.prompt("Are they from OG or Ship");
        if (ognoog1.toLocaleLowerCase() === "og") {
          let uchiha1 = await ti.prompt(
            "Is your character part of the Uchiha?"
          );
          if (
            uchiha1.toLocaleLowerCase() === "yes" ||
            uchiha1.toLocaleLowerCase() === "uchiha"
          ) {
            let rook1 = await ti.prompt(
              "Is your character part of the Rookie 9?"
            );
            if (rook1.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Sasuke");
            } else if (rook1.toLocaleLowerCase() === "no")
              ti.output("Your character is Itachi");
          } else if (uchiha1.toLocaleLowerCase() === "no") {
            let hyuga = await ti.prompt("do they have the Byakugan");
            if (hyuga.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Neji");
            } else if (hyuga.toLocaleLowerCase() === "no") {
              ti.output("Your character is Kakashi");
            }
          }
        } else if (
          ognoog1.toLocaleLowerCase() === "ship" ||
          ognoog1.toLocaleLowerCase() === "shippuden"
        ) {
          let uchiha2 = await ti.prompt("Is your character part of the Uchiha");
          if (uchiha2.toLocaleLowerCase() === "yes") {
            ti.output("Your character is Tobi/Obito");
          } else if (uchiha2.toLocaleLowerCase() === "no")
            ti.output("Your character is Pain/Nagato"); //ai helped us with a minor mistake after the to.localelowercase -->()
        }
      } else if (Dojornodoj1.toLocaleLowerCase() === "no") {
        let ognoog2 = await ti.prompt("Are they from OG or Ship");
        if (ognoog2.toLocaleLowerCase() === "og") {
          let sensei1 = await ti.prompt(
            "Is your character a sensei (includes Konohamaru)?"
          );
          if (sensei1.toLocaleLowerCase() === "yes") {
            let perv = await ti.prompt(
              "Is your character a pervy old man (or a pervy young man)?"
            );
            if (perv.toLocaleLowerCase() === "yes") {
              let restinpeace = await ti.prompt("Does your character die?");
              if (restinpeace.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Jiraiya the Gallant");
              } else ti.output("Your character is Konohamaru");
            } else if (perv.toLocaleLowerCase() === "no") {
              let restinpeace2 = await ti.prompt("Does your character die?");
              if (restinpeace2.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Asumaaaaa (goat)");
              } else if (restinpeace2.toLocaleLowerCase() === "no") {
                ti.output("Your character is Orochimaru");
              }
            }
          } else if (sensei1.toLocaleLowerCase() === "no") {
            let jinchuriki1 = await ti.prompt(
              "Is your character a Jinchuriki?"
            );
            if (jinchuriki1.toLocaleLowerCase() === "yes") {
              let hokage1 = await ti.prompt(
                "Is your character a Hokage of Konoha?"
              );
              if (hokage1.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Naruto Uzumaki");
              } else if (hokage1.toLocaleLowerCase() === "no") {
                ti.output("Your character is Gaara of the Sand");
              }
            } else if (jinchuriki1.toLocaleLowerCase() === "no") {
              let taijutsu1 = await ti.prompt(
                "Does your character use taijutsu?"
              );
              if (taijutsu1.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Rock Lee");
              } else if (taijutsu1.toLocaleLowerCase() === "no") {
                ti.output("Your character is THE GOAT Shikamaru");
              }
            }
          }
        } else if (
          ognoog2.toLocaleLowerCase() === "ship" ||
          ognoog2.toLocaleLowerCase() === "shippuden"
        ) {
          ti.output("Your character is Sai the PainterBoy");
        }
      }
    } else if (malefemale1.toLocaleLowerCase() === "female") {
      let dojornodoj2 = await ti.prompt("Does your character have dojutsu?");
      if (dojornodoj2.toLocaleLowerCase() === "yes") {
        ti.output("Your character is Hinata Hyuga");
      } else if (dojornodoj2.toLocaleLowerCase() === "no") {
        let ognoog3 = await ti.prompt(
          "Is your character from OG Naruto or Shippuden?"
        );
        if (ognoog3.toLocaleLowerCase() === "og") {
          let Team7and10 = await ti.prompt(
            "Is your character from team 10 or team 7? (yes or no)"
          );
          if (Team7and10.toLocaleLowerCase() === "yes") {
            let uselessbum = await ti.prompt(
              "Is your character completely useless for the whole series?"
            );
            if (uselessbum.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Sakura");
            } else if (uselessbum.toLocaleLowerCase() === "no") {
              ti.output("Your character is Ino Yamanaka");
            }
          } else if (Team7and10.toLocaleLowerCase() === "no") {
            let sandvillage = await ti.prompt(
              "Are they from the Sunagakure (Sand Village)?"
            );
            if (sandvillage.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Temari");
            } else if (sandvillage.toLocaleLowerCase() === "no") {
              ti.output(
                "Your character is the character who got less screen time than a literal tree, Tenten"
              );
            }
          }
        } else if (
          ognoog3.toLocaleLowerCase() === "ship" ||
          ognoog3.toLocaleLowerCase() === "shippuden"
        ) {
          ti.output("Your character is Kushina Uzumaki");
        }
      }
    }
  } else if (maincast.toLocaleLowerCase() === "no") {
    let malefemale2 = await ti.prompt("Is your character male or female?");
    if (malefemale2.toLocaleLowerCase() === "male") {
      let Dojornodoj3 = await ti.prompt("Does your character have Dojutsu?");
      if (Dojornodoj3.toLocaleLowerCase() === "yes") {
        let uchiha3 = await ti.prompt(
          "Is your character from the Uchiha Clan?"
        );
        if (uchiha3.toLocaleLowerCase() === "yes") {
          let bestgenjutsu = await ti.prompt(
            "Is your character the best genjutsu user of all time?"
          );
          if (bestgenjutsu.toLocaleLowerCase() === "yes") {
            ti.output(
              "Your character is Shisui Uchiha the Teleporter (and the one with Kotoamatsukami)"
            );
          } else if (bestgenjutsu.toLocaleLowerCase() === "no") {
            let rinnegan = await ti.prompt(
              "Does your character possess the Rinnegan?"
            );
            if (rinnegan.toLocaleLowerCase() === "yes") {
              ti.output(
                "Your character is Madara Uchiha, one of the founders of Konoha"
              );
            } else if (rinnegan.toLocaleLowerCase() === "no") {
              ti.output("Your character is Fugaku Uchiha");
            }
          }
        } else if (uchiha3.toLocaleLowerCase() === "no") {
          let hyugaside = await ti.prompt(
            "Is your character part of the Hyuga Clan?"
          );
          if (hyugaside.toLocaleLowerCase() === "yes") {
            let father = await ti.prompt("Is your character a father?");
            if (father.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Hiashi Hyuga");
            } else if (father.toLocaleLowerCase() === "no") {
              ti.output("Your character is Tokuma Hyuga");
            }
          } else if (hyugaside.toLocaleLowerCase() === "no") {
            let Otsutsuki1 = await ti.prompt(
              "Is your character part of the Ōtsutsuki Clan?"
            );
            if (Otsutsuki1.toLocaleLowerCase() === "yes") {
              let sharbyak = await ti.prompt(
                "Does your character have the Sharingan or the Byakugan?"
              );
              if (sharbyak.toLocaleLowerCase() === "sharingan") {
                ti.output("Your character is Indra Ōtsutsuki");
              } else if (sharbyak.toLocaleLowerCase() === "byakugan") {
                ti.output("Your character is Hamura Ōtsutsuki");
              }
            }
          }
        }
      } else if (Dojornodoj3.toLocaleLowerCase() === "no") {
        let akatsuki1 = await ti.prompt(
          "Is your character part of the Akatsuki?"
        );
        if (akatsuki1.toLocaleLowerCase() === "yes") {
          let zomcomandzetsu = await ti.prompt(
            "Is your character part of the 'Zombie Combo' (Hidan and Kakuzu) or are they Zetsu? (either one is a yes)"
          );
          if (zomcomandzetsu.toLocaleLowerCase() === "yes") {
            let zomcom = await ti.prompt(
              "Is your character part of the Zombie Combo"
            );
            if (zomcom.toLocaleLowerCase() === "yes") {
              let jashin = await ti.prompt(
                "Is your character a follower of Jashin?"
              );
              if (jashin.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Hidan");
              } else if (jashin.toLocaleLowerCase() === "no") {
                ti.output("Your character is Kakazu (the money launderer)");
              }
            } else if (zomcom.toLocaleLowerCase() === "no") {
              ti.output(
                "Your character is Zetsu (White+Black Zetsu Akatsuki Form)"
              );
            }
          } else if (zomcomandzetsu.toLocaleLowerCase() === "no") {
            let artduo = await ti.prompt(
              "Is your character part of the art duo (Sasori and Deidara)?"
            );
            if (artduo.toLocaleLowerCase() === "yes") {
              let explosion = await ti.prompt(
                "Does your character think art is an explosion?"
              );
              if (explosion.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Deidara");
              } else if (explosion.toLocaleLowerCase() === "no") {
                ti.output(
                  "Your character is Sasori (the bum who lost to Sakura because of plot armor hahahaaa)"
                );
              }
            } else if (artduo.toLocaleLowerCase() === "no") {
              ti.output(
                "Your character is Kisame Hoshigaki (Might Guy doesnt even remember bro lol)"
              );
            }
          }
        } else if (akatsuki1.toLocaleLowerCase() === "no") {
          let sensei2 = await ti.prompt(
            "Is your character a Sensei in Konoha?"
          );
          if (sensei2.toLocaleLowerCase() === "yes") {
            let academy1 = await ti.prompt(
              "Has your character taught at the Konoha academy?"
            );
            if (academy1.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Iruka");
            } else if (adacemy1.toLocaleLowerCase() === "no") {
              ti.output("Your character is Might Guy");
            }
          } else if (sensei2.toLocaleLowerCase() === "no") {
            let previoushokage = await ti.prompt(
              "Is your character a previous Hokage?"
            );
            if (previoushokage.toLocaleLowerCase() === "yes") {
              let senjuclan = await ti.prompt(
                "Is your character part of the Senju Clan?"
              );
              if (senjuclan.toLocaleLowerCase() === "yes") {
                let uchihahater = await ti.prompt(
                  "Does your character hate the Uchiha Clan?"
                );
                if (uchihahater.toLocaleLowerCase() === "yes") {
                  ti.output("Your character is Tobirama Senju");
                } else if (uchihahater.toLocaleLowerCase() === "no") {
                  ti.output("Your character is Hashirama Senju");
                }
              } else if (senjuclan.toLocaleLowerCase() === "no") {
                let evilman = await ti.prompt(
                  "Is your character the most evil person in the entire series?"
                );
                if (evilman.toLocaleLowerCase() === "yes") {
                  ti.output("Your character is Danzo");
                } else if (evilman.toLocaleLowerCase() === "no") {
                  ti.output("Your character is Minato Namikaze");
                }
              }
            } else if (previoushokage.toLocaleLowerCase() === "no") {
              let darui = await ti.prompt("Is your character Darui?");
              if (darui.toLocaleLowerCase() === "yes") {
                ti.output("Your character is Darui");
              } else if (darui.toLocaleLowerCase() === "no") {
                let omoi = await ti.prompt("Is your character Omoi?");
                if (omoi.toLocaleLowerCase() === "yes") {
                  ti.output("Your character is Omoi");
                } else if (omoi.toLocaleLowerCase() === "no") {
                  let killerbee = await ti.prompt(
                    "Is your character Killer Bee?"
                  );
                  if (killerbee.toLocaleLowerCase() === "yes") {
                    ti.output("Your character is Killer Bee");
                  } else if (killerbee.toLocaleLowerCase() === "no") {
                    ti.output("Your character is Zabuza");
                  }
                }
              }
            }
          }
        }
      } else if (malefemale2.toLocaleLowerCase() === "female") {
        let dojornodoj4 = await ti.prompt("Does your character have Dojutsu?");
        if (dojornodoj4.toLocaleLowerCase() === "yes") {
          let Otsutsuki2 = await ti.prompt(
            "Is your character part of the Ōtsutsuki Clan?"
          );
          if (Otsutsuki2.toLocaleLowerCase() === "yes") {
            ti.output("Your character is Kaguya Ōtsutsuki");
          } else if (Otsutsuki2.toLocaleLowerCase() === "no") {
            ti.output("Your character is Hanabi Hyuga");
          }
        } else if (dojornodoj4.toLocaleLowerCase() === "no") {
          let ognoog4 = await ti.prompt(
            "Is your character from OG Naruto or Shippuden"
          );
          if (ognoog4.toLocaleLowerCase() === "og") {
            let hokage2 = await ti.prompt("Is your character a former Hokage?");
            if (hokage2.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Tsunade");
            } else if (hokage2.toLocaleLowerCase() === "no") {
              ti.output(
                "Your character is Haku (haha Haku is actually a boy I tricked you)"
              );
            }
          } else if (
            ognoog4.toLocaleLowerCase() === "ship" ||
            ognoog4.toLocaleLowerCase() === "shippuden"
          ) {
            let taka = await ti.prompt(
              "Are they a part of the group The Taka?"
            );
            if (taka.toLocaleLowerCase() === "yes") {
              ti.output("Your character is Karin");
            } //copilot helped fix an error with curly brackets
          } else if (taka.toLocaleLowerCase() == "no") {
            ti.output("Your character is Konan of the Akatsuki");
          }
        }
      }
    }
  }
  ti.output("do you wanna play again");
  playing = await ti.readYesOrNo("play again");
}
ti.output("thank you for playing our game");
