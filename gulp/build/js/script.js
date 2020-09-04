$(document).ready(function () {
    
    //Обрезать текст
    function minimizeText(lengthStr) {
        if ($(".active .banner-section__subtitle-text span").text().length > lengthStr && $(".active .banner-section__subtitle-text").has(".link-detail-element").length < 1) {
            var originalText = $(".active .banner-section__subtitle-text span").text();
            console.log(originalText, 'originalText');
            var newText = originalText.substr(0, lengthStr);
            $(".active .banner-section__subtitle-text span").text(newText);
            let linkDetailEl =
                "<a class='link-detail-element'><svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0H28V28H0V0Z' fill='#262525'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.5 13H10.7395V15.2406H8.5V13ZM12.9803 13H15.2197V15.2406H12.9803V13ZM19.7001 13H17.4592V15.2406H19.7001V13Z' fill='white'/></svg></a>";
            $(".banner-section__subtitle-text span")
                .parent()
                .append(linkDetailEl);
        }

        if ($(".banner-section__subtitle-text").hasClass("hidden")) {
            $(".banner-section__subtitle-text").removeClass("hidden");
        }
    }

    minimizeText(150);

    $(".left-menu__sections ul li").click(function () {
        
        var bannerLinks = $(".left-menu__sections ul li");
        for (var i = 0; i < bannerLinks.length; i++) {
            bannerLinks[i].classList.remove("active");
        }
        $(this).addClass("active");
        var number = $(this).attr("data-order");
        $(".counter-wrapper .counter__current").text(number);
        carouselBanners(true, number);
        minimizeText(150);
    });
    

    
    var slideIndex = 1;

    //Карусель анимации баннеров
    function carouselBanners(useManualArg, numberOfBanner) {
        var useManual = useManualArg || false;

        var bannersArr = document.getElementsByClassName("banner");

        if (slideIndex > bannersArr.length) {
            slideIndex = 1;
        }

        if (slideIndex < 1) {
            slideIndex = bannersArr.length;
        }

        for (i = 0; i < bannersArr.length; i++) {
            bannersArr[i].style.display = "none";
            bannersArr[i].className = bannersArr[i].className.replace(
                " active",
                ""
            );
        }

        if (useManual) {
            bannersArr[numberOfBanner - 1].style.display = "flex";
            bannersArr[numberOfBanner - 1].className += " active";
    
            $(".counter-wrapper .counter__current").text(numberOfBanner);
        } else {
            bannersArr[slideIndex - 1].style.display = "flex";
            bannersArr[slideIndex - 1].className += " active";
    
            $(".counter-wrapper .counter__current").text(slideIndex);
            slideIndex++;
            setTimeout(carouselBanners, 3000);
        }
    }

   
});