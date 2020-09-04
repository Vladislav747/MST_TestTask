$(document).ready(function () {
    getMobileMenu();

    //FOOTER
    $(".dropdown-footer-menu").click(function (e) {
        var currentAttr = $(e.target).data("col");
        let searchElement = $(".footer__wrap").find(
            ".children[data-col='" + currentAttr + "']"
        );

        if (searchElement) {
            searchElement.toggleClass("active");
            searchElement.slideToggle();
        } else {
            new Error("Can`t find Attribute" + currentAttr);
        }
    });

    //Обрезать текст
    function minimizeText(lengthStr) {
        console.log(
            $(".banner-section__subtitle-text span").text().length,
            "Длина"
        );
        if (
            $(".banner-section__subtitle-text span").text().length > lengthStr
        ) {
            // console.log("Режем");
            // console.log(
            //     $(".banner-section__subtitle-text span").parent(),
            //     "Родительский элемент"
            // );
            var originalText = $(".banner-section__subtitle-text span").text();
            var newText = originalText.substr(0, lengthStr);
            $(".banner-section__subtitle-text span").text(newText);
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

    minimizeText(100);

    $(".left-menu__sections ul li").click(function () {
        
        var bannerLinks = $(".left-menu__sections ul li");
        console.log(bannerLinks);
        for (var i = 0; i < bannerLinks.length; i++) {
            bannerLinks[i].classList.remove("active");
        }
        $(this).addClass("active");
        var number = $(this).attr("data-order");
        $(".counter-wrapper .counter__current").text(number);
        carouselBanners(true, number);
    });
    

    //Карусель баннеров
    var slideIndex = 1;

    //carouselBanners();

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

$(window).resize(function () {
    console.log("Resize works");
    getMobileMenu();
});

function getMobileMenu() {
    let widthForMobileMenu = 990;

    if (
        $("body").width() < widthForMobileMenu &&
        $("#mobilemenu").is(":empty")
    ) {
        $.ajax({
            type: "GET",
            url: "php/mobilemenu.php",
            success: function (data) {
                console.log("Мобильная подгрузка");

                $("#mobilemenu").html(data);
            },
        }).done(function () {
            $(".mobile-menu__burger-svg").click(function () {
                $("#mobilemenu").toggleClass("show");
                $("#mobilemenu-overlay").toggleClass("show");
                $("#mobilemenu").customScrollbar();
            });

            $(".close-element").click(function () {
                $("#mobilemenu").toggleClass("show");
                $("#mobilemenu-overlay").toggleClass("show");
            });

            $("#mobilemenu-overlay").click(function () {
                if ($("#mobilemenu").hasClass("show")) {
                    $("#mobilemenu").toggleClass("show");
                    $("#mobilemenu-overlay").toggleClass("show");
                }
            });

            //SUBMOBILEMENU
            $(".mobilemenu__link--dropdown").click(function (e) {
                var currentAttr = $(e.target).data("col");
                $(e.target).toggleClass("open");
                let searchElement = $(".mobilemenu__middle").find(
                    ".sub-mobilemenu__wrapper[data-col='" + currentAttr + "']"
                );

                if (searchElement) {
                    searchElement.toggleClass("active");
                    searchElement.slideToggle();
                } else {
                    new Error("Can`t find Attribute" + currentAttr);
                }
            });
        });
    }
}
