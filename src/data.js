import yogurt from "./img/Lacteos/yogurtfinal.png";
import kumis from "./img/Lacteos/kumis.jpg";
import queso from "./img/Lacteos/quesofinal.png";
import tocineta from "./img/Carnicos/tocineta_ahumada.jpeg";
import jamon from "./img/Carnicos/jamon Ahumado.jpeg";
import coctel from "./img/Carnicos/chorizo_coctel.jpeg";
import chorizo from "./img/Carnicos/chorizoParrillero.jpeg";
import salchicha from "./img/Carnicos/Salchicha.jpeg";
import almojabana from "./img/Otros/almojabana.jpeg";
import bocadillo from "./img/Otros/bocadillo.jpeg";
import galletas from "./img/Otros/galletasp.jpeg";

const products = [
    {
        category: "lacteos",
        id: 1,
        name: "yogurt",
        flavor: [
            "Lulo",
            "Arequipe",
            "Kiwi",
            "Guanabana",
            "Mango",
            "Melocoton",
            "Fresa",
            "Mora",
            "Frutos rojos",
            "Ron con pasas",
            "Freijoa",
            "Piña",
            "Maracuya",
        ],
        prices: 10500,
        amount: 2,
        image: yogurt,
    },
    {
        category: "lacteos",
        name: "Kumis",
        flavor: "Natural",
        prices: 10500,
        amount: 2,
        image: kumis,
    },
    {
        category: "lacteos",
        name: "Queso",
        flavor: "Semnameescremado",
        prices: 9000,
        amount: 1,
        image: queso,
    },
    {
        category: "carnicos",
        name: "Tocineta ahumada",
        flavor: "Tocineta",
        prices: 6000,
        amount: 250,
        image: tocineta,
    },
    {
        category: "carnicos",
        name: "Jamon ahumado",
        flavor: "Jamon",
        prices: 7000,
        amount: 500,
        image: jamon,
    },
    {
        category: "carnicos",
        name: "Chorizo parrillero mixto",
        flavor: "Chorizo",
        prices: 6000,
        amount: 10,
        image: chorizo,
    },
    {
        category: "carnicos",
        name: "Chorizo parrillero de cóctel",
        flavor: "Chorizo",
        prices: 5500,
        amount: 1500,
        image: coctel,
    },
    {
        category: "carnicos",
        name: "Salchicha",
        flavor: "Salchicha",
        prices: 6500,
        amount: 500,
        image: salchicha,
    },
    {
        category: "otros",
        name: "Galletas polvorosas",
        flavor: "Vainilla",
        prices: 8000,
        amount: 60,
        image: galletas,
    },
    {
        category: "otros",
        name: "Bocadillo de guayaba",
        flavor: "Vainilla",
        prices: 8000,
        amount: 60,
        image: bocadillo,
    },
    {
        category: "otros",
        name: "Almojabanas en paquete ",
        flavor: "Almojabana",
        prices: 9000,
        amount: 10,
        image: almojabana,
    },
];

export default products;
