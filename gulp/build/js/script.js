$(document).ready(function () {    
    minimizeText(100, 1);

    $(".left-menu__sections ul li").click(function () {
        var bannerLinks = $(".left-menu__sections ul li");
        for (var i = 0; i < bannerLinks.length; i++) {
            bannerLinks[i].classList.remove("active");
        }
        $(this).addClass("active");
        var numberOfBanner = $(this).attr("data-order");
        $(".counter-wrapper .counter__current").text(numberOfBanner);
        carouselBanners(numberOfBanner);
        minimizeText(100, numberOfBanner);
    });

    $(".header-menu__item-link").hover(function (e) { underlineMenu(e) }, function () {
        $(".header-menu__underline").animate({ "width": 0 }, 400);
        }
    );
    
    //Подчеркивание верхнего меню
    function underlineMenu(element) {
        var totalLength = 0;

        var attrData = $(element.target).attr("data-order");

        for (var i = 0; i <= attrData; i++){
            totalLength += $(".header-menu__item")[i].offsetWidth;
        }
        //Чуть чуть уменьшили
        var resultLength = totalLength - 20;
        $(".header-menu__underline").animate({ "width": resultLength }, 500);
    }

   
});

//Обрезать текст
function minimizeText(lengthStr, order) {
    var element = $(".banner-section__subtitle-text[data-order="+ order + "]" + " span");
    if (element.text().length > lengthStr && element.parent().has(".link-detail-element").length < 1) {
        var originalText = element.text();

        var newText = originalText.substr(0, lengthStr);
        element.text(newText);
        let linkDetailEl = "<a class='link-detail-element'><svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0H28V28H0V0Z' fill='#262525'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.5 13H10.7395V15.2406H8.5V13ZM12.9803 13H15.2197V15.2406H12.9803V13ZM19.7001 13H17.4592V15.2406H19.7001V13Z' fill='white'/></svg></a>";
        element
            .parent()
            .append(linkDetailEl);
    }

    if (element.parent().hasClass("hidden")) {
        element.parent().removeClass("hidden");
    }
}

 //Карусель анимации баннеров
 function carouselBanners( numberOfBanner) {

    var bannersArr = document.getElementsByClassName("banner");

    for (i = 0; i < bannersArr.length; i++) {
        bannersArr[i].style.display = "none";
        bannersArr[i].className = bannersArr[i].className.replace(
            " active",
            ""
        );
    }

        bannersArr[numberOfBanner - 1].style.display = "flex";
        bannersArr[numberOfBanner - 1].className += " active";

        $(".counter-wrapper .counter__current").text(numberOfBanner);
    
}