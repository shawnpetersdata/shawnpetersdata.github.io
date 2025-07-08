const artworks = [
    { 
        src: "images/flock.png", 
        description: "", 
        details: "945 x 945 pixels, Digital, 2024" 
    },
    { 
        src: "images/landscape.png", 
        description: "", 
        details: "707 x 707 pixels, Digital, 2025" 
    },
    { 
        src: "images/tau.png", 
        description: "", 
        details: "992 x 992 pixels, Digital, 2025" 
    },
    { 
        src: "images/triangle.png", 
        description: "", 
        details: "926 x 926 pixels, Digital, 2025" 
    },
    { 
        src: "images/living mosiac.png", 
        description: "", 
        details: "2340 x 2808, Digital, 2025" 
    },
    { 
        src: "images/klondyke.png", 
        description: "", 
        details: "14 x 11 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/passinglight.jpg", 
        description: "", 
        details: "17 x 11 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/fragments.jpg", 
        description: "", 
        details: "20 x 10 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/beyond.jpg", 
        description: "", 
        details: "8 x 10 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/shagrock.png", 
        description: "", 
        details: "3600 x 3600 pixels, Digital, 2025" 
    }

];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("artwork-img").src = artworks[index].src;
    document.getElementById("art-description").innerText = artworks[index].description;
    document.getElementById("art-details").innerText = artworks[index].details;
    document.getElementById("artworkModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("artworkModal").style.display = "none";
}

function prevArtwork() {
    currentIndex = (currentIndex === 0) ? artworks.length - 1 : currentIndex - 1;
    openModal(currentIndex);
}

function nextArtwork() {
    currentIndex = (currentIndex === artworks.length - 1) ? 0 : currentIndex + 1;
    openModal(currentIndex);
}
