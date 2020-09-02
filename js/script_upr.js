$(document).ready(function() {
    //System.php
    let submenuOpener = document.getElementsByClassName('submenu-opener')[0];
    let subSubMenuOpener = document.getElementsByClassName('sub-submenu-opener')[0];
    let menuSystemOpener = document.getElementsByClassName('top__mobile-menu')[0];
    let mobileOverlayEl = document.getElementById('mobilemenu-overlay');


    menuSystemOpener.addEventListener("click", function(){
        $('.sidebar').slideToggle();
        $('#mobilemenu-overlay').toggleClass('show');
        $('.sidebar').toggleClass("show");
        $('.top').toggleClass('open');

        
    });

    submenuOpener.addEventListener("click", function(){
        $('.submenu-wrapper').slideToggle();
        $('.submenu-opener').toggleClass("open");
    
        
    });

    subSubMenuOpener.addEventListener("click", function(){
        $('.sub-submenu-wrapper').slideToggle();
        $('.sub-submenu-opener').toggleClass("open");
        
    });

    mobileOverlayEl.addEventListener("click", function(){
        if($('.sidebar').hasClass('show')){
            $('.sidebar').slideUp();
            $('#mobilemenu-overlay').toggleClass('show');
            $('.sidebar').toggleClass("show");
            $('.top').toggleClass('open');
        }  
    });

    

  });



