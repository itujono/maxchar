import bulma from "bulma"
import "./style.scss"

import maxCharFn from "./script"



function renderResult(str) {
    const val = document.querySelector(".textarea").value;
    const result = document.querySelector(".result");
    const charResult = maxCharFn(val);

    if (val) {
        result.innerHTML = `
          <div class="content">
            <ul>
              <li>Karakter yang paling banyak keluar adalah <strong>${charResult[0]}</strong></li>
              <li>Doi muncul sebanyak <strong>${charResult[1]}</strong> kali.</li>
            </ul>
          </div>
        `
    }
}


document.querySelector(".trigger").addEventListener("click", renderResult)