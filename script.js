const artworks = [
    { 
        src: "images/tau.png", 
        title: "Rebirth of Tau",
        description: "Fragmented circles are constructed using only values derived from tau.", 
        details: "992 x 992 pixels, Digital, 2025" 
    },
    { 
        src: "images/triangle.png", 
        title: "Electric Sierpinski",
        description: "Neon triangles overlay a mask of a Sierpinski triangle.", 
        details: "926 x 926 pixels, Digital, 2025" 
    },
    { 
        src: "images/living mosiac.png",
        title: "Living Mosiac", 
        description: "Faces are detected and stored to be reassembled into the current viewer.", 
        details: "2340 x 2808, Digital, 2025" 
    },
    { 
        src: "images/klondyke.png",
        title: "Temporal Currents on The Klondyke",
        description: "Perlin noise, influenced by circular flow fields, transititions between images of The Klondyke taken at different dates and times.", 
        details: "14 x 11 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/passinglight.jpg",
        title: "Goosepond By Passing Light",
        description: "Flow fields aid the transition of passing time at Goosepond.", 
        details: "17 x 11 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/fragments.jpg",
        title: "Fragments of Carbonear", 
        description: "A view of Carbonear is subdivided with varying polarization, with random sections recoloured.", 
        details: "20 x 10 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/beyond.jpg",
        title: "What is Beyond", 
        description: "The Brigus Tunnel is recreated using photogrammery and inserted into a night-time scene.", 
        details: "8 x 10 inches, Digital on canvas, 2025" 
    },
    { 
        src: "images/shagrock.png",
        title: "Shag Rock in Neon", 
        description: "Contours from increasingly blurred images of Shag Rock are layered with a decreasing gaussian blur applied.", 
        details: "3600 x 3600 pixels, Digital, 2025" 
    }

];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("artwork-img").src = artworks[index].src;
    document.getElementById("art-title").innerText = artworks[index].title || "";
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
