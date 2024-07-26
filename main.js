document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Code pour la navbar
    document.getElementById('hamburger').addEventListener('click', function() {
        console.log('Hamburger menu clicked');
        document.getElementById('navbar').style.display = 'block';
        document.getElementById('hamburger').style.display = 'none';
        document.getElementById('close').style.display = 'block';
    });

    document.getElementById('close').addEventListener('click', function() {
        console.log('Close button clicked');
        document.getElementById('navbar').style.display = 'none';
        document.getElementById('hamburger').style.display = 'block';
        document.getElementById('close').style.display = 'none';
    });

    // Fonctionnalité du logo en cercle
    const text = document.querySelector(".logo .circle");
    if (text) {
        let textResult = "";
        text.innerText.split("").forEach((char, index) => {
            textResult += `<span style="transform: translateY(-50%) rotateZ(${(index+1) * 12}deg); display: inline-block;">${char}</span>`;
        });
        text.innerHTML = textResult;
    }

    // Fonctionnalité du lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    const lightboxImages = document.querySelectorAll('.image-container img');
    console.log('Images in image-container:', lightboxImages);

    function openLightbox(index) {
        console.log('Opening lightbox at index:', index);
        currentIndex = index;
        lightbox.style.display = 'block';
        lightboxImg.src = lightboxImages[currentIndex].src;
    }

    function closeLightbox() {
        console.log('Closing lightbox');
        lightbox.style.display = 'none';
    }

    // Ajout des écouteurs d'événements pour le lightbox
    lightboxImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', function() {
        console.log('Lightbox Close button clicked');
        closeLightbox();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
        lightboxImg.src = lightboxImages[currentIndex].src;
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % lightboxImages.length;
        lightboxImg.src = lightboxImages[currentIndex].src;
    });
});