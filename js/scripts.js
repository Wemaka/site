// slider gallery
$(document).ready(function () {
    let slider = document.querySelector('.slider');
    if (slider) {
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
    };
})

// external js: masonry.pkgd.js
// $(document).ready(function () {
jQuery(window).on('load', function(){
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

    let sizer = '.sizer4';
    let container = $('.gallery');

    if (container) {
        container.imagesLoaded(function () {
            container.masonry({
                itemSelector: '.item-masonry',
                // columnWidth: sizer,
                percentPosition: true,
                transitionDuration: '0.2s',
            })
        });
    }
    // let elem = document.querySelector('#gallery');
    // let msnry = new Masonry(elem, {
    //     itemSelector: '.item-masonry',
    //     columnWidth: sizer,
    //     percentPosition: true,
    //     transitionDuration: '0.2s',
    // });
});

function showContent() {
    // let temp = document.getElementsByTagName("template")[0];
    // if (temp) {
    //     let clon = temp.content.cloneNode(true);
    //     document.body.appendChild(clon);
    // }
    const mobileMenus = document.querySelector('#mobile-menus');
    let cloneMobileMenus = mobileMenus.content.cloneNode(true);
    document.body.appendChild(cloneMobileMenus);
}


if (document.body.classList.contains('_touch')) {
    // mobile-menu
    // пока выключены
    // showContent()

    // document.querySelector('.popup-content').hidden = false;
    // mav-menu
    // rlMenu('.header__mobile-navigation', '#nav-menu-mobile', '.close-ham-menu')

    // фильтры paper_mobile
    // document.querySelector('.gallery-filter-mobile').hidden = true;
    // rlMenu('.btn-filter', '.gallery-filter-mobile', '.gallery-sorting-layout__header')

    // btn('.btn-filter', '.gallery-filter-head','.gallery-filter-mobile')
    // document.querySelector('.gallery-sorting-layout__header').addEventListener("click", function (e) {
    //     console.log('click')
    // });

    // document.querySelector('.gallery-sorting').hidden = true;

} else {

    // меню профиля
    $('.header__profile').on('click', function () {
        $(this).toggleClass('_active');
    });

    $(document).on('mouseup', function (e) {
        let s = $('.header__profile._active');
        if (!s.is(e.target) && s.has(e.target).length === 0) {
            s.removeClass('_active');
        }
    });
}



function rlMenu(rlmenu, close) {
    // const button = document.querySelector(btn)
    const menu = document.querySelector(rlmenu)
    const closeHamMenu = document.querySelector(close)

    // if (button) {
    //     button.addEventListener("click", function (e) {
    //         menu.classList.toggle('_active');
    //         document.body.classList.toggle('_lock')
    //     });
    // };

    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock')

    $(document).on('mouseup', function (e) {
        let s = $(menu)

        if (menu.classList.contains('_active') === true) {
            if (!s.is(e.target) && s.has(e.target).length === 0) {
                s.removeClass('_active');
                document.body.classList.remove('_lock')
            } else {
                if (closeHamMenu) {
                    closeHamMenu.addEventListener("click", function (e) {
                        menu.classList.remove('_active');
                        document.body.classList.remove('_lock')
                    });
                }
            }
        }
    });
}

// mav-menu
$(".header__mobile-navigation").on('click', function (e) {
    rlMenu('#nav-menu-mobile', '.close-ham-menu')
});
// profile-menu
$(".header-profile-avatar").on('click', function (e) {
    rlMenu('#profile-menu-mobile', '.close-ham-menu-2');
});
// фильтры
$(".btn-filter").on('click', function (e) {
    rlMenu('.gallery-filter-mobile', '.gallery-filter-head');
});

function btn(button, closebtn, clsname) {
    $(document).ready(function () {
        $(button).click(function () {
            $(clsname).addClass('_active');
        });
    });

    $(document).ready(function () {
        $(closebtn).click(function () {
            $(clsname).removeClass('_active');
        });
    });
}


// topics
btn('.gallery-sorting-submenu', '.gallery-sorting-layout__header','.gallery-search-layout')
// tags
btn('.gallery-sorting-submenu-2', '.gallery-sorting-layout__header','.gallery-search-layout-2')


// $(document).ready(function () {
//     $('.sorting-container__sorting').click(function (e) {
//         // $('.like-button').toggle('_active');
//         e.currentTarget.classList.toggle('_active');

//         if (e.currentTarget.classList.contains('_active')) {
//             let sorting = document.querySelector('.sorting-container__sorting')
//             let title = document.createElement('div')
//             title.className = 'title'
//             title.innerHTML = '<h1>text</h1>'
//             sorting.appendChild(title)
//         } else {
//             let title = document.querySelector('.title')
//             title.remove()
//         }
//     });
// });


// like button
$(".like-btn").on('click', function (e) {
    // $('.like-button').toggle('_active');
    e.currentTarget.classList.toggle('_active');
});


// checkbox
// let boxes = document.querySelectorAll('.checkbox');
// if (boxes) {
//     for (let index = 0; index < boxes.length; index++) {
//         const box = boxes[index];
//         box.addEventListener("click", function (e) {
//             box.classList.toggle('_active');
//         });
//     }
// }
$(".checkbox").on('click', function (e) {
    var context = $(e.currentTarget);
    let value = context.children('.dissabled-and-enabled').val();

    if (value === '0') {
        context.children('.dissabled-and-enabled').val('1')
    } else if (value === '1') {
        context.children('.dissabled-and-enabled').val('2')
    } else if (value === '2') {
        context.children('.dissabled-and-enabled').val('0')
    }
});

