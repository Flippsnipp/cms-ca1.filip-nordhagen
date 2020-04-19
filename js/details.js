/*
    Content Management System - Course Assignment - Level 1 -details
*/

let id = (new URL(window.location)).searchParams.get("id");
const flowerPowerInformation = "https://cors-anywhere.herokuapp.com/http://flower-power.filipnordhagen.com/wp-json/wc/store/products/" + id;
const displayedProducts = document.querySelector(".results");


fetch(flowerPowerInformation)
    .then(response => response.json())
    .then(productDetails)
    .catch(error => console.error(error));

function productDetails(product) {
    console.log(product);
    html = `               
        <div class="card">    
            <img class="image" src="${product.images[0].src}" alt="${product.name}"/>
            <div class="details">
                <h4 class="name">${product.name}</h4> 
                <p>${product.prices.price_prefix} ${product.prices.price}</p>                                 
                
            </div>
        </div>
        `;
    displayedProducts.innerHTML = html;
}