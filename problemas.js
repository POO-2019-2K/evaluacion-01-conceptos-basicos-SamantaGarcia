export default class Factura{
    constructor(name, lastName, age, date, totalFactura, numFactura){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._date = date;
        this._totalFactura = totalFactura;
        this._numFactura = numFactura;
    }

    getDate(){
        return this._date;
    }

    getTotalFact(){
        return this._totalFactura;
    }

    getNumF(){
        return this._numFactura;
    }

    setNumF(){
        this._numFactura = numFactura;
    }

    _showData(){
        console.log(`Bill Data:
        Name: ${this._name},
        Lastname: ${this._lastName},
        Age: ${this._age},
        Date of bill: ${this._date},
        Total of bill: ${this._totalFactura},
        Number of bill: ${this._numFactura}`);
    }



}