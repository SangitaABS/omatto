// script for toogle


function qwe(){
    let nav = document.querySelector(".nav");
    let toggle = document.querySelector(".toggle");
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

// ==== heartIcon button Start ====
let heartIcon = document.querySelectorAll(".heartIcon");
for(let i of heartIcon){
  i.addEventListener('click',function(){
    console.log("done");
    this.classList.toggle('active');
  });
}
// ==== heartIcon button End ====

// script for toggle ending here

// script for slider open here
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
// script for slider closed here