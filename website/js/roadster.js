const roadsterUrl = "https://api.spacexdata.com/v3/roadster";

fetch (roadsterUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createHtml(json);
    })
    .catch(function(error) {
    });

function createHtml(json) {
    console.dir(json);
    const container = document.querySelector(".roadster");
     image = document.querySelector(".image-api");
    if (json.flickr_images[3]) {
        image.src = json.flickr_images[3];
    } else if (json.image_background) {
        image.src = json.image_background;
    } else {
        image.src = "https://via.placeholder.com/400";
    }
    image.alt = json.name;
    const name = document.querySelector(".h4");
    name.innerHTML = json.name;

    const details = document.querySelector(".descr");
    details.innerHTML = json.details;
}