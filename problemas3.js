export default class Casa{
    constructor(price, surface, numRooms, numBaths){
        this._price = price;
        this._surface = surface;
        this._numRooms = numRooms;
        this._numBaths = numBaths;
    }

    getPrice(){
        return this._price;
    }
    getSurface(){
        return this._surface
    }
    
    setNumHabs(){
        this._numRooms = numRooms;
    }
    setNumBaths(){
        this._numRooms = numRooms;
    }

    _showData(){
        console.log(`House Data:
        price: ${this._price},
        surface: ${this._surface},
        number of rooms: ${this._numRooms},
        number of bathrooms: ${this._numBaths},`);
    }

}