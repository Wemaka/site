// slider gallery
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        cssEase: 'ease',
        adaptiveHeight: false,
        draggable: false,
        touchMove: false,
        waitForAnimate: false,
        variableWidth: false,
        touchThreshold: 7,
        // appendArrows: $('.arrow-btn'),
    });
})

// external js: masonry.pkgd.js
$(document).ready(function () {
    // jQuery('.item-masonry').hover(
    //     function () {
    //         $(this).find(".cover-item-gallery").fadeIn(200);
    //     },
    //     function () {
    //         $(this).find(".cover-item-gallery").fadeOut(200);
    //     }
    // );
    // jQuery('.gallery__author').hover(
    //     function () {

    //     }
    // );
    var sizer = '.sizer4';
    var container = $('#gallery');

    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: '.item-masonry',
            columnWidth: sizer,
            percentPosition: true,
            transitionDuration: '0.2s'
        })
    });
});


// device definition
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMibile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    // rightmenu
    const profile = document.querySelector('.profile');
    const rightMenu = document.querySelector('#rightMenu');
    if (profile) {
        profile.addEventListener("click", function (e) {
            rightMenu.classList.toggle('_active');
            document.body.classList.toggle('_lock')
        });

        $(document).on('mouseup', function (e) {
            let s = $('#rightMenu');

            if (rightMenu.classList.contains('_active') === true) {
                if (!s.is(e.target) && s.has(e.target).length === 0) {
                    s.removeClass('_active');
                    document.body.classList.remove('_lock')
                } else {
                    const closeHamMenu = document.querySelector('.closeHamMenu-2');
                    if (closeHamMenu) {
                        closeHamMenu.addEventListener("click", function (e) {
                            rightMenu.classList.remove('_active');
                            document.body.classList.remove('_lock')
                        });
                    }
                }
            }
        });
    }

} else {
    document.body.classList.add('_pc');

    // меню профиля
    $('.profile').on('click', function () {
        $(this).toggleClass('_active');
    });

    $(document).on('mouseup', function (e) { // При нажатии на документ
        let s = $('.profile._active'); // берём .block._active
        if (!s.is(e.target) && s.has(e.target).length === 0) {
            // Если нажат не он и не его дочернии И сам он существует
            s.removeClass('_active'); // То удаляем у него класс .active
        }
    });
}


// меню бургер leftmenu
const button = document.querySelector('#mobileNavigation');
const leftMenu = document.querySelector('#leftMenu');
if (button) {
    button.addEventListener("click", function (e) {
        leftMenu.classList.toggle('_active');
        document.body.classList.toggle('_lock')
    });

    $(document).on('mouseup', function (e) {
        let s = $('#leftMenu');

        if (leftMenu.classList.contains('_active') === true) {
            if (!s.is(e.target) && s.has(e.target).length === 0) {
                s.removeClass('_active');
                document.body.classList.remove('_lock')
            } else {
                const closeHamMenu = document.querySelector('.closeHamMenu');
                if (closeHamMenu) {
                    closeHamMenu.addEventListener("click", function (e) {
                        leftMenu.classList.remove('_active');
                        document.body.classList.remove('_lock')
                    });
                }
            }
        }
    });
}



function btn(name, clsname) {

    $(document).ready(function () {
        $(name).click(function () {
            $(clsname).addClass('_active');
            console.log('open')
        });
    });

    $(document).ready(function () {
        $('.search-filter__head').click(function () {
            $(clsname).removeClass('_active');
            console.log('close')
        });
    });
}

// topics
btn('.search-filter-submenu', '.search-filter-layout')
// tags
btn('.search-filter-submenu-2', '.search-filter-layout-2')





// checkbox
let boxes = document.querySelectorAll('.checkbox');
if (boxes) {
    for (let index = 0; index < boxes.length; index++) {
        const box = boxes[index];
        box.addEventListener("click", function (e) {
            box.classList.toggle('_active');
        });
    }
}



// фильтры paper_mobile
const btnFilter = document.querySelector('.btnFilter');
const paper_mobile = document.querySelector('.paper_mobile');
if (btnFilter) {
    btnFilter.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        paper_mobile.classList.toggle('_active');
    });

    $(document).on('mouseup', function (e) {
        let s = $('.paper_mobile');

        if (paper_mobile.classList.contains('_active') === true) {
            if (!s.is(e.target) && s.has(e.target).length === 0) {
                s.removeClass('_active');
                document.body.classList.remove('_lock')
            } else {
                const closeHamMenu = document.querySelector('.search-filter__head-2');
                if (closeHamMenu) {
                    closeHamMenu.addEventListener("click", function (e) {
                        document.body.classList.remove('_lock')
                        paper_mobile.classList.remove('_active');
                    });
                }
            }
        }
    });
}
