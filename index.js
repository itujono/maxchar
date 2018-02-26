import bulma from "bulma"
import "./style.scss"

import maxCharFn from "./script"

import sun from "./sun.png"



function renderResult(str) {
    const textArea = document.querySelector(".textarea");
    const val = document.querySelector(".textarea").value;
    const result = document.querySelector(".result");
    const charResult = maxCharFn(val);

    if (val) {
        textArea.classList.remove("is-danger")      
        result.innerHTML = `
          <div class="content">
            <ul>
              <li>Karakter yang paling banyak keluar adalah <strong>${charResult[0]}</strong></li>
              <li>Doi muncul sebanyak <strong>${charResult[1]}</strong> kali.</li>
            </ul>
          </div>
        `
    } else {
      textArea.classList.add("is-danger")
    }
}


document.querySelector(".trigger").addEventListener("click", renderResult)

document.querySelector(".clear-form").addEventListener("click", () => {
    let textArea = document.querySelector(".textarea");
    let result = document.querySelector(".result");

    console.log("Mak! Terapus wak!")
    
    textArea.value = "";
    result.innerHTML = ""
})

document.querySelector(".stack-info").addEventListener("mouseover", () => {
    document.querySelector(".modal-info").classList.add("visible")
})

document.querySelector(".stack-info").addEventListener("mouseleave", () => {
    document.querySelector(".modal-info").classList.remove("visible")
})

document.querySelector(".stack-info").addEventListener("click", () => {
    const modal = document.querySelector(".modal-info")
    modal.classList.contains("visible") ? modal.classList.remove("visible") : modal.classList.add("visible")
})