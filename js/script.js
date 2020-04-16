/*
    Content Management System - Course Assignment - Level 1
*/

const flowerPowerInformation = "http://localhost/flower-power/wp-json/Products";
const displayedProduct = document.querySelector(".results");
let html = "";

fetch(flowerPowerInformation)
    .then(response => reponse.json())
    .then(jsonData) => 