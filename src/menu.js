class MenuItem {
    constructor(name, price, image){
        this._name = name;
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
    let container = document.querySelector('#content');
}