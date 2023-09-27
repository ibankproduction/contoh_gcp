import showAllert from "./showAllert.js"

console.info("wellcome home")

const btn_home = document.getElementById("btn_home")

if (btn_home !== null) {
    btn_home.addEventListener("click", showAllert)


}
