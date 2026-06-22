// 20 Dummy Images
const images = [
    "https://picsum.photos/id/1015/700/400",
    "https://picsum.photos/id/1016/700/400",
    "https://picsum.photos/id/1018/700/400",
    "https://picsum.photos/id/1020/700/400",
    "https://picsum.photos/id/1024/700/400",
    "https://picsum.photos/id/1025/700/400",
    "https://picsum.photos/id/1031/700/400",
    "https://picsum.photos/id/1033/700/400",
    "https://picsum.photos/id/1035/700/400",
    "https://picsum.photos/id/1037/700/400",
    "https://picsum.photos/id/1040/700/400",
    "https://picsum.photos/id/1041/700/400",
    "https://picsum.photos/id/1042/700/400",
    "https://picsum.photos/id/1043/700/400",
    "https://picsum.photos/id/1050/700/400",
    "https://picsum.photos/id/1051/700/400",
    "https://picsum.photos/id/1052/700/400",
    "https://picsum.photos/id/1053/700/400",
    "https://picsum.photos/id/1060/700/400",
    "https://picsum.photos/id/1069/700/400"
];

let currentIndex = 0;
let slide = document.getElementById("slide");
let interval;

// Display image
function showImage(index) {
    slide.src = images[index];
}

// Next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Previous image
function prevImage() {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Start slideshow
function startSlideshow() {
    clearInterval(interval);
    interval = setInterval(nextImage, 2000);
}

// Stop slideshow
function stopSlideshow() {
    clearInterval(interval);
}

// Button Events
document.getElementById("startBtn")
    .addEventListener("click", startSlideshow);

document.getElementById("stopBtn")
    .addEventListener("click", stopSlideshow);

document.getElementById("nextBtn")
    .addEventListener("click", () => {
        stopSlideshow();
        nextImage();
    });

document.getElementById("prevBtn")
    .addEventListener("click", () => {
        stopSlideshow();
        prevImage();
    });

// Initial Image
showImage(currentIndex);

// Auto Start
startSlideshow();