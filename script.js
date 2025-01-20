const menuOpenButton = document.querySelector
("#menu-open-button")

const menuCloseButton = document.querySelector
("#menu-Close-button")


menuOpenButton.addEventListener("click",()=>{

    //Toggle mobile Menu Visibalelity
    document.body.classList.toggle("show-mobile-menu");
})

//close Moble vasibelety
menuCloseButton.addEventListener("click",()=> menuOpenButton.click
());

//Swing Class

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });