
const temas = document.querySelector("#temas");

const opentemas = document.querySelector("#opentemas");
const closetemas = document.querySelector("#closetemas");

opentemas.addEventListener("click", () => {
    temas.style.display = "flex";
});

closetemas.addEventListener("click", () => {
    temas.style.display = "none";
})