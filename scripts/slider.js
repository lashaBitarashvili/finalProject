let indexInfSlide = 1;


function moveSlides(number) {
    slidesShower(indexInfSlide = indexInfSlide + number)
}

function currentSlide(number) {
    slidesShower(indexInfSlide = number)
}

function slidesShower(number) {
    let i;
    let slides = document.getElementsByClassName("myPicturers");
    let dots = document.getElementsByClassName("dot");

    if (number > slides.length) {
        indexInfSlide = 1
    }

    if (number < 1) {
        indexInfSlide = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[indexInfSlide - 1].style.display = "block";
    dots[indexInfSlide - 1].className += " active";

}