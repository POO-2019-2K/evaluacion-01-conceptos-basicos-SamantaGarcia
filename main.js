import Factura from "./problemas.js"
import Paciente from "./problema2.js";
import Casa from "./problemas3.js";

//Facturas
let bill1 = new Factura ("Samanta", "Rubio", "18", "19/02/2019", "500", "1");

bill1._numFactura = "5";
bill1._showData();

//Paciente
let pat1 = new Paciente("Eduardo", "García", "18", "00/00/0000", "0", "0");
pat1._dateOB = "15/04/2000";
pat1._estatura = "1.70";
pat1._peso = "59.5";
pat1._showData();

//Casas
let house1 = new Casa("20","200", "0", "0");
house1._numBaths = "5";
house1._numRooms = "5";
house1._showData();