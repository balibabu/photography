// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the reference to the div where images will be displayed
    var imageGallery = document.getElementById("imageGallery");

    // Fetch the list of images from the "images" folder
    fetch("images/")
        .then(response => response.text())
        .then(data => {
            // Parse the HTML content to extract image filenames
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(data, "text/html");
            var imageElements = htmlDoc.querySelectorAll("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg'], a[href$='.gif']");

            // Create image elements for each image in the folder
            imageElements.forEach(function (imageElement) {
                var imgElement = document.createElement("img");
                imgElement.src = "images/" + imageElement.getAttribute("href");
                imageGallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
});
