const navLi = document.querySelectorAll(".smooth-scroll");
const sections = document.querySelectorAll(".section");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }

    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 110) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
}

document.getElementById("courseWorkId").addEventListener("click", () => setActive("courseWorkId"));
document.getElementById("headerId").addEventListener("click", () => setActive("headerId"));
document.getElementById("aboutSectionId").addEventListener("click", () => setActive("aboutSectionId"));
document.getElementById("workExpId").addEventListener("click", () => setActive("workExpId"));
document.getElementById("hobbiesId").addEventListener("click", () => setActive("hobbiesId"));

function setActive(id) {
    document.getElementById(id).classList.add("active");
}

let slideIndex = 1;
showSlides(slideIndex, "mySlides");

let slideIndexFooter = 1;
showSlides(slideIndexFooter, "mySlides-1");

document.getElementById("prevModalId").addEventListener("click", () => plusSlides(-1));
document.getElementById("nextModalId").addEventListener("click", () => plusSlides(1));
document.getElementById("footerPrevId").addEventListener("click", () => plusSlidesFooter(-1));
document.getElementById("footerNextId").addEventListener("click", () => plusSlidesFooter(1));

function plusSlides(n) {
    showSlides((slideIndex += n), "mySlides");
}

function plusSlidesFooter(n) {
    showSlides((slideIndex += n), "mySlides-1");
}

function showSlides(n, className) {
    let slides = document.getElementsByClassName(className);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
    var video = document.getElementById("videoId");
    video.pause();
    video.currentTime = 0;
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};