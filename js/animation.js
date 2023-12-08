const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

var el = document.getElementsByClassName('menu-item');
for(var i = 0; i<el.length; i++){
    el[i].addEventListener('mousedown', showSub, false);
    el[i].addEventListener('mousemove', showSub, false);
    el[i].addEventListener('mouseleave', hideSub, false);
}

function showSub() {
    if (this.children.length>1){
        this.children[1].style.height = "auto"
        this.children[1].style.opacity = "1"
        this.children[1].style.overflow = "visible"
    } else {
        return false;
    }
}

function hideSub() {
    if (this.children.length>1){
        this.children[1].style.height = "0"
        this.children[1].style.opacity = "0"
        this.children[1].style.overflow = "hidden"
    } else {
        return false;
    }
}


document.onmousemove = (e) => {
    document.onclick = () => {
        let circle = document.createElement('div');
        circle.classList.add('click');
        circle.style.left = e.pageX + 'px';
        circle.style.top = e.pageY + 'px';
        document.body.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500)
    };
};

const text = document.querySelector('.txt');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');
text.addEventListener('click', function(event) {
    if (event.target.tagName != 'SPAN') return;
    event.target.classList.remove('active');
    event.target.classList.add('active');
})

const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -25);
    setTimeout(goTop, 0);
  }
}

let dots = document.getElementsByClassName('dot'),
    dotsArea = document.getElementById('dots-block'),
    slides = document.getElementsByClassName('slider-item'),
    prev = document.getElementById('prev-btn'),
    next = document.getElementById('next-btn'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}

prev.onclick = function () {
    plusSlides(-1);
}
next.onclick = function () {
    plusSlides(1);
}
dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};