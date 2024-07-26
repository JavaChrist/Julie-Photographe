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

    // Sélectionne toutes les images du carrousel
    const images = document.querySelectorAll('.carousel img');
    console.log('Carousel images:', images);

    if (images.length > 0) {
        let currentIndex = 0;

        function changeImage() {
            console.log('Changing image');
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(changeImage, 3000);
    }

    // Fonctionnalité du logo en cercle
    const text = document.querySelector(".logo .circle");
    if (text) {
        let textResult = "";
        text.innerText.split("").forEach((char, index) => {
            textResult += `<span style="transform: translateY(-50%) rotateZ(${(index+1) * 12}deg); display: inline-block;">${char}</span>`;
        });
        text.innerHTML = textResult;
    }
});