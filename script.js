// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the reference to the div where images will be displayed
    var imageGallery = document.getElementById("imageGallery");

    // Path to the images folder
    var imagesFolderPath = 'images/';

    // Fetch all images in the "images" folder
    fetchImages(imagesFolderPath).then(function (imagePaths) {
        // Loop through the image paths and create image elements
        imagePaths.forEach(function (path) {
            // Create an image element
            var imgElement = document.createElement("img");

            // Set the source attribute to the image path
            imgElement.src = path;

            // Append the image element to the image gallery
            imageGallery.appendChild(imgElement);
        });
    });
});

// Function to fetch all images in a folder
async function fetchImages(folderPath) {
    // Fetch the list of files in the folder
    var response = await fetch(folderPath);
    var files = await response.json();

    // Filter only image files (you may need to adjust this filter based on your file types)
    var imageFiles = files.filter(function (file) {
        return /\.(jpe?g|png|gif|svg)$/i.test(file.name);
    });

    // Map file objects to their paths
    var imagePaths = imageFiles.map(function (file) {
        return folderPath + file.name;
    });

    return imagePaths;
}
