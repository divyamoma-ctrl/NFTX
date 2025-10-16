// To open navlinks from right


const closeBtn = document.querySelector('.close-btn');

const navbarCollapsed = document.querySelector('.navbar-collapsed');

//---To stop scrolling when the navbar-collapsed is visible from right ---//
const body = document.querySelector('body');
//-----//

//Getting overlay
const overlay = document.querySelector('.overlay');
let close = true;

closeBtn.addEventListener('click',()=>{
    if(close === true) {
        close = false;
        navbarCollapsed.style.right = "0%";
        //To remove 1 before/after bar
        closeBtn.classList.add('open');
        //---To stop scrolling when the navbar-collapsed is visible from right ---//
        body.style.overflow = "hidden";
        //when closebtn will be tapped overlay will on
        overlay.classList.add('active');
    } else {
        close = true;
        navbarCollapsed.style.right = "-100%";
         closeBtn.classList.remove('open');
        //---To start scrolling when the navbar-collapsed is non-clicked or visible from right ---//     
         body.style.overflow = "visible";
        //when closebtn will be crossed or closed overlay will off
         overlay.classList.remove('active');
    }
})


// For Slider (mySwiper)

let auctionSwiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grabcursor: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   pagination: {
    el: '.swiper-pagination',
    // clickable: true,
  },

  // Responsive breakpoints 

   breakpoints: {
    0:{
      slidesPerView: 1,
       },
    1200: {
       slidesPerView: 2,
      },
    1400: {
        slidesPerView: 3,
      }
}
});


// For Slider2 (artSwiper)

let artistSwiper = new Swiper(".artSwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    grabcursor: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints 

   breakpoints: {
    0:{
      slidesPerView: 1,
       },
     768: {
      slidesPerView: 2,
     }, 
    1200: {
       slidesPerView: 3,
      },
    1400: {
        slidesPerView: 4,
      }
}
});

// 






