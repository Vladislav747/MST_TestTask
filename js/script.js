$(document).ready(function() {
   
    getMobileMenu();
   
    //FOOTER
    $('.dropdown-footer-menu').click(function(e){
        var currentAttr =  $(e.target).data("col");
        let searchElement = $('.footer__wrap').find((".children[data-col='" + currentAttr + "']"));

        if(searchElement){
            searchElement.toggleClass('active');
            searchElement.slideToggle();
        }else{
            new Error('Can`t find Attribute' + currentAttr);
        }
        
        }
        
    );

  });

  $(window).resize(function(){
      console.log("Resize works");
      getMobileMenu();
  });

   
  function getMobileMenu(){
    let widthForMobileMenu = 990;

    if($('body').width() < widthForMobileMenu && $('#mobilemenu').is(':empty')){
        
        $.ajax({
            type: "GET",
            url: "php/mobilemenu.php",
            success: function(data) {
                console.log('Мобильная подгрузка');
                
                $('#mobilemenu').html(data);
            }
          }).done(function(){

            $('.mobile-menu__burger-svg').click(function(){
                $('#mobilemenu').toggleClass('show');
                $('#mobilemenu-overlay').toggleClass('show');
                $("#mobilemenu").customScrollbar();
            });
        
            $('.close-element').click(function(){
                $('#mobilemenu').toggleClass('show');
                $('#mobilemenu-overlay').toggleClass('show');
            });
        
            $('#mobilemenu-overlay').click(function(){
                if($('#mobilemenu').hasClass('show')){
                    $('#mobilemenu').toggleClass('show');
                    $('#mobilemenu-overlay').toggleClass('show');
                }
            });

             //SUBMOBILEMENU
            $('.mobilemenu__link--dropdown').click(function(e){
                var currentAttr =  $(e.target).data("col");
                $(e.target).toggleClass('open');
                let searchElement = $('.mobilemenu__middle').find((".sub-mobilemenu__wrapper[data-col='" + currentAttr + "']"));
                
                if(searchElement){
                    searchElement.toggleClass('active');
                    searchElement.slideToggle();
                }else{
                    new Error('Can`t find Attribute' + currentAttr);
                }
                
                }
                
            );
        })
        
    }


}



