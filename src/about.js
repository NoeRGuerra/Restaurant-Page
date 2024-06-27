export function buildAboutPage() {
    let container = document.querySelector('#content');
    let aboutContainer = document.createElement('div');
    let aboutHeader = document.createElement('h2');
    let aboutText = document.createElement('p');
    aboutHeader.textContent = "About Us";
    aboutText.innerHTML = "Welcome to the Restaurant, where culinary excellence meets warm hospitality. Located in the heart of Metropolis, we use the freshest, locally-sourced ingredients to craft a menu that celebrates rich flavors. <br/> Our talented chefs blend classic techniques with innovative flair, offering dishes that are both timeless and contemporary. Whether you're here for a casual meal, a special celebration, or a romantic dinner, our inviting atmosphere and attentive service will make your visit memorable. <br/> Join us at the Restaurant and enjoy a dining experience that delights your taste buds and warms your heart."
    aboutContainer.classList.add('about');
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutText);
    container.appendChild(aboutContainer);
}