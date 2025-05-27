const artworks = [
    { 
        src: "images/klondyke.png", 
        description: "A surreal take on modern landscapes, combining natural and digital elements.", 
        details: "60 x 48 in, Digital, 2024" 
    },
    { 
        src: "images/work2.jpg", 
        description: "Exploring the connection between fluidity and structure through algorithmic patterns.", 
        details: "72 x 60 in, Oil on Canvas, 2023" 
    },
    { 
        src: "images/work3.jpg", 
        description: "A study in generative randomness, creating unique compositions each time.", 
        details: "48 x 36 in, Generative Art, 2022" 
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
