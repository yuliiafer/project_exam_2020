// getting API from Nasa with my id-kod
const nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=01gob9mTce7eUoDvvJxav5Tw1JnxhDqxB9vgsKmi";

fetch (nasaUrl)
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
    const container = document.querySelector(".planetary");
    const image = document.querySelector(".image-nasa");
    if (json.url) {
        image.src = json.url;
    } else if (json.image_background) {
        image.src = json.image_background;
    } else {
        image.src = "https://via.placeholder.com/400";
    }
    image.alt = json.title;
    const name = document.querySelector(".title");
    name.innerHTML = json.title;

    const date = document.querySelector(".date");
    date.innerHTML = "Date:" + " " + json.date;

    const explanation = document.querySelector(".explanation");
    explanation.innerHTML = json.explanation;

    const copyright = document.querySelector(".copyright");
    copyright.innerHTML = "Copyright:" + " " + json.copyright;
}