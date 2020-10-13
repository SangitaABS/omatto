// ===script for toogle open here ===
function toggle__menu(){
    let nav = document.querySelector(".nav");
    let toggle = document.querySelector(".toggle");
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}
// ===script for toggle close here ===

// ==== heartIcon button Start ====
let heartIcon = document.querySelectorAll(".heartIcon");
for(let i of heartIcon){
  i.addEventListener('click',function(){
    console.log("done");
    this.classList.toggle('active');
  });
}
// ==== heartIcon button End ====

// === Banner Slider Script open here ===
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
// === Banner Slider Script closed here ===

// === Slider for review section open here ===
$('.review__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
// === Slider for review section open here ===