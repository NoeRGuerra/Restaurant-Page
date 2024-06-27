import seaTroutTartareImg from './assets/sea-trout-tartare.jpg';
import tunaTartareImg from './assets/tuna-tartare.jpeg';
import salmonTartareImg from './assets/salmon-tartare.jpg';
import steakTartareImg from './assets/steak-tartare.jpg';

class MenuItem {
    constructor(name, description, price, image){
        this._name = name;
        this._description = description;
        this._price = price;
        this._image = image;
    }

    get name(){
        return this._name;
    }
    
    set name(newName){
        if (typeof newName === "string" && newName.length < 30){
            this._name = newName;
        } else {
            throw new Error('Name must be a string with a maximum of 30 characters.');
        }
    }

    get description(){
        return this._description;
    }

    set description(newDescription){
        if (typeof newDescription === "string" && newDescription.length < 100){
            this._description = newDescription;
        } else {
            throw new Error('Description must be a string with a maximum of 100 characters');
        }
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        if (typeof newPrice === "number" && newPrice >= 0){
            this._price = newPrice;
        } else {
            throw new Error('Price must be a positive number');
        }
    }

    get image(){
        return this._image;
    }

    set image(newImageLink){
        if (typeof newImageLink !== "string"){
            throw new Error('Image link must be a string');
        }
        const validExtensions = ['jpg', 'png', 'gif', 'webp'];
        const extension = newImageLink.split(".").pop().toLowerCase();
        if (validExtensions.includes(extension)){
            this._image = newImageLink;
        } else {
            throw new Error('Image must be one of the following types: jpg, png, gif, webp.');
        }
    }
}

export function buildMenu() {
    let mainContainer = document.querySelector('#content');
    let headline = document.createElement('h2');
    let tagline = document.createElement('p');
    headline.textContent = "Our Menu";
    tagline.textContent = "We offer a wide selection of dishes that cater to both traditional and modern tastes";
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    let menuItems = [
        new MenuItem('Sea trout tartare', 'Salmon, tuna, squid, onions, dill, capers, lemon juice, olive oil, mustard sauce, salt, pepper', 18.50, seaTroutTartareImg),
        new MenuItem('Tuna tartare', 'Tuna, onions, garlic, capers, dill, lemon juice, olive oil, arugula', 14.50, tunaTartareImg),
        new MenuItem('Salmon tartare', 'Salmon fillet, red onions, capers, olive oil, avocado, marinated seaweed', 16.50, salmonTartareImg),
        new MenuItem('Beef fillet tartare', 'Beef fillet, onions, capers, dill, curry, Dijon mustard, olive oil, salt, pepper', 11.50, steakTartareImg),
    ]

    for (let item of menuItems){
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item');
        let itemImg = new Image();
        let itemTextContainer = document.createElement('div');
        let itemName = document.createElement('p');
        let itemDescription = document.createElement('p');
        let itemPrice = document.createElement('p');
        itemImg.src = item.image;
        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        itemContainer.appendChild(itemImg);
        itemTextContainer.appendChild(itemName);
        itemTextContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemTextContainer);
        itemContainer.appendChild(itemPrice);
        menuContainer.appendChild(itemContainer);
    }

    mainContainer.appendChild(headline);
    mainContainer.appendChild(tagline);
    mainContainer.appendChild(menuContainer);
}