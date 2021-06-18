const rocketsUrl = "https://api.spacexdata.com/v3/rockets";
// mark a function as async
async function fetchRockets() {
    try {
        // use await calling fetch
        const response = await fetch(rocketsUrl);
        // use await when resolve a return value
        const rockets = await response.json();
        // pass an array rockets to the function
        displayRockets(rockets);
    } catch (error) {
        console.log(error);
    }
}
// call the function
fetchRockets();
function displayRockets(rockets) {
    console.log(rockets);
    // select the div where html will be created
    const rocketsContainer = document.querySelector(".products-api");
    // declare a variable for new html
    let html = "";
    // loop trough with a for loop
 rockets.forEach(function(rocket) {
    // display placeholder if the property is empty (placeholder or image of Falcon 1, because I know that is missing in the API)
    //    let ratingValue = "https://via.placeholder.com/400?text=spacex.com";
        let ratingValue = "images/Falcon_1.jpg";
        if (rocket.flickr_images[3]) {
            ratingValue = rocket.flickr_images[3];
        }
    // add the new html to the div class="products-api"
    html += `<div class="card-api">
    <img class="image-api" src="${ratingValue}"; alt="${rocket.rocket_name}></div>
        <div class="details-api">
            <h4 class="name">${rocket.rocket_name}</h4>
            <p class="description">${rocket.description}</p>
        </div>`
     })
    // assign the new html string to innerHTML property
    rocketsContainer.innerHTML = html;
}




