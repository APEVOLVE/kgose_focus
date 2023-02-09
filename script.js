const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

var allFilters = document.querySelectorAll('.gallery-content .btns li.btn');
var allCards = document.querySelectorAll('.mainContainer .gallery div.card');

for(var i = 0; i < allFilters.length; i++){
    allFilters[i].addEventListener('click', myFunction);
}

function myFunction(){
    var currentTab = document.querySelector('.gallery-content .btns .active');
    currentTab.classList.remove('active');

    this.classList.add('active');

    var filter = this.getAttribute('data-filter');

    if(filter != 'all'){
        for(let i = 0; i < allCards.length; i++){
            allCards[i].classList.add('hide');
            allCards[i].classList.remove('active');

            var currentItem = allCards[i].getAttribute('data-item');
            if(currentItem == filter){
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    }else{
        for(let i = 0; i < allCards.length; i++){
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}
