// Show more button
const showMoreBtn = document.querySelector("#showMoreBtn");
const myPhotos = document.querySelector("#myPhotos");
const totalImages = 8;
let startImageId = 4;

showMoreBtn.addEventListener("click", () => {
    if (startImageId >= totalImages) {
        alert("Opps! there are no more pictures!");
    }
    else {
        let currentImageId = 0;
        for (currentImageId = startImageId; currentImageId < startImageId + 4; currentImageId++) {
            const newImg = document.createElement("img");
            newImg.src = `./image/image${currentImageId + 1}.jpg`;
            newImg.alt = `image${currentImageId + 1}`;
            newImg.id = `photo${currentImageId + 1}`;
            myPhotos.append(newImg);
        }
        startImageId = currentImageId;
    };
});
