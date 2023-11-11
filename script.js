document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        } 
        slideIndex++;
        if (slideIndex > slides.length) {
        slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }

    const searchInput = document.querySelector('.searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const cartIcon = document.querySelector('.cart');
    
    let isActivated = false;
    
    searchIcon.addEventListener('click', function() {
      isActivated = !isActivated;
      searchInput.classList.toggle('activated')
      searchIcon.classList.toggle('active');
      if (isActivated) {
        searchInput.style.marginTop = '-10px';
        searchIcon.style.marginTop = '-10px';
        cartIcon.style.marginTop = '10px';
      } else {
        searchInput.style.marginTop = '0';
        searchIcon.style.marginTop = '0';
        cartIcon.style.marginTop = '15px';
      }
    });


    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    var nav = document.querySelector('.btmContentNav');
    
    menuIcon.addEventListener('click', function () {
      nav.classList.toggle('active');
      closeIcon.classList.toggle('active');
    });
    
    
    closeIcon.addEventListener('click', function () {
      nav.classList.remove('active');
      closeIcon.classList.remove('active');
    });
    
    
    
    
});


