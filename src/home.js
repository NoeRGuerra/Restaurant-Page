import Photo from './assets/salad.png';

export function buildHome() {
    let container = document.querySelector('#content');
    let heroContainer = document.createElement('div');
    heroContainer.classList.add('hero');
    let heroTextContainer = document.createElement('div');
    let heroHeadline = document.createElement('p');
    let heroDescription = document.createElement('p');
    let heroButton = document.createElement('button');
    let heroImage = new Image();
    heroImage.src = Photo;
    heroHeadline.textContent = "At our place - tasty and cozy";
    heroDescription.textContent = "Delicious food, great company, and a creative atmosphere all in one place for an ideal time spent with family and friends at our restaurant!";
    heroButton.textContent = "View our menu";
    heroTextContainer.appendChild(heroHeadline);
    heroTextContainer.appendChild(heroDescription);
    heroTextContainer.appendChild(heroButton);
    heroContainer.appendChild(heroTextContainer);
    heroContainer.appendChild(heroImage);
    container.appendChild(heroContainer);
}