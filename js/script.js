/*
    Content Management System - Course Assignment - Level 1
*/

const flowerPowerInformation = "http://http://flower-power.filipnordhagen.com/wp-json/wc/store/products";
const displayedProducts = document.querySelector(".results");
let html = "";

fetch(flowerPowerInformation)
    .then(response => reponse.json())
    .then((json) => displayedProducts(json.results))
    .catch(error => window.location = "error.html"); 

function displayedProducts (products) {
    products.forEach(function(output) {
        console.dir(json);
        }
        html += `               
                    <div class="card">    
                        <img class="image" src="${output.image}" alt="${output.name}"/>
                        <div class="details">
                            <h4 class="name">${output.name}</h4> 
                            <p>${output.prices.price_prefix} ${output.prices.price}</p>                                 
                            <a class="btn btn-primary" href="details.html?id=${output.id}">Details</a>
                        </div>
                    </div>
                `
        
    });
    displayedInfo.innerHTML = html;
};


/*

fetch(rickAndMortySeriesInformation)
    .then(response => response.json())
    .then((json) => createdCharacterInformation(json.results))
    .catch(error => window.location = "error.html");

function createdCharacterInformation (data) {
    data.forEach(function(output) {
        if (!output.type){
            output.type = "Unknown";
        }
        html += `
                    <div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                    <img class="image" src="${output.image}" alt="${output.name}">
                    <div class="details">
                    <h4 class="name">${output.name}</h4>
                    <p>Type: ${output.type}</p>    
                    <p>Episode count: ${output.episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${output.id}">Details</a>
                    </div>
                    </div>
                    </div>
                `
        
    });
    displayedInfo.innerHTML = html;
};
*/