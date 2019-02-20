export default class Paciente{
    constructor(name, lastName, age, dateOB, estatura, peso){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._dateOB = dateOB;
        this._estatura = estatura;
        this._peso = peso;
    }

    getDateOB(){
        return this._dateOB;
    }

    setDateOB(){
        this._dateOB = dateOB;
    }
    setEstatura(){
        this._estatura = estatura;
    }
    setPeso(){
        this._peso = peso;
    }
    _showData(){
        console.log(`Patient Data:
        Name: ${this._name},
        Lastname: ${this._lastName},
        Age: ${this._age},
        Date of birth: ${this._dateOB},
        Height: ${this._estatura},
        Weight: ${this._peso}`);
    }
}