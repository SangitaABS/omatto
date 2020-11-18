let qw = document.querySelector('#slick-slide-control00');
// qw.innerHTML("01");

// -----=====script for toogle open here =====-----
function toggle__menu(){
    let nav = document.querySelector(".nav");
    let toggle = document.querySelector(".toggle");
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}
// -----=====script for toggle close here =====-----

// -----===== heartIcon button Start =====-----
let heartIcon = document.querySelectorAll(".heartIcon");
for(let i of heartIcon){
  i.addEventListener('click',function(){
    console.log("done");
    this.classList.toggle('active');
  });
}
// -----===== heartIcon button End =====-----

// -----===== Banner Slider Script open here =====-----
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
// -----===== Banner Slider Script closed here =====-----

// -----===== Slider for review section open here =====-----
$('.review__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
// -----===== Slider for review section close here =====-----

// $('.review__slider').slick({
//   dots: true,
//   arrows: false,
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// -----===== Home page end here =====-----



// -----===== Product page start here =====-----
// === Slider for Product Section Start here ===
$('.product__slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    }
  ]
});
// === Slider for Product Section Close here ===
// -----===== Product page start here =====-----