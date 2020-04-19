/*
    Content Management System - Course Assignment - Level 1
*/

const flowerPowerInformation = "https://cors-anywhere.herokuapp.com/http://flower-power.filipnordhagen.com/wp-json/wc/store/products";
const displayedProducts = document.querySelector(".results");


fetch(flowerPowerInformation)
    .then(response => response.json())
    .then(productInformation)
    .catch(error => console.error(error));


function productInformation (results) {
    let html = "";
    console.log(results);
    
    results.forEach(function (output) {
        console.log(output);
        
            html += `               
                    <div class="card">    
                        <img class="image" src="${output.images[0].src}" alt="${output.name}"/>
                        <div class="details">
                            <h4 class="name">${output.name}</h4> 
                            <p>${output.prices.price_prefix} ${output.prices.price}</p>                                 
                            <a class="productButton" href="details.html?id=${output.id}">View More</a>
                        </div>
                    </div>
                    `;
        
    });
    console.log(html);
    
    displayedProducts.innerHTML = html;
}