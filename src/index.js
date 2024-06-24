import { buildHome } from "./home"
import { buildMenu } from "./menu";

buildHome();

let mainContainer = document.querySelector("#content");
let homeButton = document.querySelector('button:first-child');
let menuButton = document.querySelector('button:nth-child(2)');
let aboutButton = document.querySelector('button:last-child');

homeButton.addEventListener('click', () => {
    mainContainer.replaceChildren();
    buildHome();
})

menuButton.addEventListener('click', () => {
    mainContainer.replaceChildren();
    buildMenu();
})