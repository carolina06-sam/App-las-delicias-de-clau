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
        id: 1,
        category: "lacteos",
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
        content: 2,
        image: yogurt,
    },
    {
        id: 2,
        category: "lacteos",
        name: "Kumis",
        flavor: "Natural",
        prices: 10500,
        content: 2,
        image: kumis,
    },
    {
        id: 3,
        category: "lacteos",
        name: "Queso",
        flavor: "Semnameescremado",
        prices: 9000,
        content: 1,
        image: queso,
    },
    {
        id: 4,
        category: "carnicos",
        name: "Tocineta ahumada",
        flavor: "Tocineta",
        prices: 6000,
        content: 250,
        image: tocineta,
        amount: 0,
    },
    {
        id: 5,
        category: "carnicos",
        name: "Jamon ahumado",
        flavor: "Jamon",
        prices: 7000,
        content: 500,
        image: jamon,
        amount: 0,
    },
    {
        id: 6,
        category: "carnicos",
        name: "Chorizo parrillero mixto",
        flavor: "Chorizo",
        prices: 6000,
        content: 10,
        image: chorizo,
        amount: 0,
    },
    {
        id: 7,
        category: "carnicos",
        name: "Chorizo parrillero de cóctel",
        flavor: "Chorizo",
        prices: 5500,
        conten: 1500,
        image: coctel,
        amount: 0,
    },
    {
        id: 8,
        category: "carnicos",
        name: "Salchicha",
        flavor: "Salchicha",
        prices: 6500,
        content: 500,
        image: salchicha,
        amount: 0,
    },
    {
        id: 9,
        category: "otros",
        name: "Galletas polvorosas",
        flavor: "Vainilla",
        prices: 8000,
        content: 60,
        image: galletas,
    },
    {
        id: 10,
        category: "otros",
        name: "Bocadillo de guayaba",
        flavor: "Vainilla",
        prices: 8000,
        content: 60,
        image: bocadillo,
    },
    {
        id: 11,
        category: "otros",
        name: "Almojabanas en paquete ",
        flavor: "Almojabana",
        prices: 9000,
        content: 10,
        image: almojabana,
    },
];

export default products;
