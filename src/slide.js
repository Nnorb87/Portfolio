DefaultState();

function currentDiv(sliderElement, index) {
    showDivs(sliderElement, index);
}

function DefaultState(index) {
    if (index == undefined) {
        index = 1;
    }
    var slideIndex = index;
    var sliders = document.getElementsByClassName("n2Slider");

    for (let j = 0; j < sliders.length; j++) {
        var slides = sliders[j].getElementsByClassName("mySlides")
        var dots = sliders[j].getElementsByClassName("demo");

        if (index > slides.length) { slideIndex = 1 }
        if (index < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-white";

    }
}

function showDivs(slider, index) {
    var slideIndex = index;
    var slides = slider.parentElement.parentElement.getElementsByClassName("mySlides");
    var dots = slider.parentElement.getElementsByClassName("demo");

    if (index > slides.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";

}