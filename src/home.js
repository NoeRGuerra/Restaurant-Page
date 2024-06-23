export function buildHome() {
    let container = document.querySelector('#content');
    let heroContainer = document.createElement('div');
    let heroText = document.createElement('p');
    let heroButton = document.createElement('button');
    heroContainer.appendChild(heroText);
    heroContainer.appendChild(heroButton);
    heroText.innerHTML = "Taste of Japan" + "<br/>" + "since 1985" + "<br/>" + "Welcome to a Timeless Culinary Journey; Unveiling the Legacy of Our Japanese Restaurant Established in 1985, Nestled Amidst the Vibrant Landscapes of Sri Lanka.";
    heroButton.textContent = "Make Reservation";
    container.appendChild(heroContainer);
}