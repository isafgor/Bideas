//Якоря

$("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

//position sticky для мобильного хедера

let navigation = document.getElementById('navigation');
let main = document.getElementById('main');

function scrollFunction () {
    if (document.body.clientWidth < 1025) {
        if (window.scrollY > 80) {
            navigation.style.position = 'fixed';
            navigation.style.top = '-80px';
            navigation.style.left = '0';
            navigation.style.right = '0'
            main.style.marginTop = '200px'
        } else {
            navigation.style.position = 'static';
            navigation.style.top = 'auto';
            navigation.style.left = 'auto';
            navigation.style.right = 'auto'
            main.style.marginTop = '42px'
        }
    } else {
        navigation.style.position = 'relative';
        navigation.style.top = 'auto';
        navigation.style.left = 'auto';
        navigation.style.right = 'auto'
    }
}

function displayModal (id, bool) {
    let body = document.body

    let modal = document.getElementById(id)

    let saftech = document.getElementById('ru')


    if (bool !== 'none') {
        // body.style.overflowY = 'hidden'
        // body.style.width = 'calc(100% - 15px)'

        setTimeout(() => {
            modal.style.opacity = '1'
        }, 0)

        saftech.style.filter = 'blur(2px)'
        modal.style.display = bool
    } else {
        modal.style.opacity = '0'
        saftech.style.filter = 'none'

        setTimeout(() => {
            modal.style.display = bool
            // body.style.overflowY = 'auto'
            // body.style.width = '100%'
        }, 300)
    }
}


// Burger menu

let burgerOn = false
let burger = document.getElementById('burger')
let mask = document.getElementById('burger-mask')

function burgerMenu () {
    burgerOn = !burgerOn

    if (burgerOn) {
        mask.style.display = 'block'
        burger.classList.add('header-burger__cross')
        setTimeout(() => {
            mask.style.opacity = '1'
        }, 0)
    } else {
        mask.style.opacity = '0'
        burger.classList.remove('header-burger__cross')
        setTimeout(() => {
            mask.style.display = 'none'
        }, 500)
    }
}

navigation ? window.onscroll = scrollFunction : false;

let openPhotoSwipe = function(payload) {
    let pswpElement = document.querySelectorAll('.pswp')[0];

    let arrays = [
        [
            {
                mediumImage: {
                    src: './img/products/online-shop/1.png',
                    w:800,
                    h:600
                },
                originalImage: {
                    src: './img/products/online-shop/1.png',
                    w: 1440,
                    h: 4554
                }
            },
            {
                mediumImage: {
                    src: './img/products/online-shop/2.png',
                    w:800,
                    h:600
                },
                originalImage: {
                    src: './img/products/online-shop/2.png',
                    w: 1440,
                    h: 2611
                }
            },
            {
                mediumImage: {
                    src: './img/products/online-shop/3.png',
                    w:800,
                    h:600
                },
                originalImage: {
                    src: './img/products/online-shop/3.png',
                    w: 1440,
                    h: 1829
                }
            },
        ],
        [],
        [],
        [
            {
                mediumImage: {
                    src: './img/products/promo/1.png',
                    w:800,
                    h:600
                },
                originalImage: {
                    src: './img/products/promo/1.png',
                    w: 1440,
                    h: 5029
                }
            },
        ]
    ]

    // build items array
    let items = arrays[payload]

    // define options (if needed)
    let options = {
        // history & focus options are disabled on CodePen
        history: false,
        focus: false,
        closeOnScroll: false,
        closeOnVerticalDrag: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0,


    };

    // let gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    // gallery.init();
    let gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

    let realViewportWidth,
        useLargeImages = false,
        firstResize = true,
        imageSrcWillChange;

    gallery.listen('beforeResize', function() {

        realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;

        if(useLargeImages && realViewportWidth < 1000) {
            useLargeImages = false;
            imageSrcWillChange = true;
        } else if(!useLargeImages && realViewportWidth >= 1000) {
            useLargeImages = true;
            imageSrcWillChange = true;
        }

        if(imageSrcWillChange && !firstResize) {
            gallery.invalidateCurrItems();
        }

        if(firstResize) {
            firstResize = false;
        }

        imageSrcWillChange = false;

    });


    gallery.listen('gettingData', function(index, item) {

        if( useLargeImages ) {
            item.src = item.originalImage.src;
            item.w = item.originalImage.w;
            item.h = item.originalImage.h;
        } else {
            item.src = item.mediumImage.src;
            item.w = item.mediumImage.w;
            item.h = item.mediumImage.h;
        }


    });


    gallery.init();
};

let logos = [
    {
        src: 'img/clients/mailru.png'
    },
    {
        src: 'img/clients/mercedes.png'
    },
    {
        src: 'img/clients/tnt.png'
    },
    {
        src: 'img/clients/dom.png'
    },
    {
        src: 'img/clients/ren.png'
    },
    {
        src: 'img/clients/vk.png'
    },
    {
        src: 'img/clients/ok.png'
    },
    {
        src: 'img/clients/philips-logo.png'
    },
    {
        src: 'img/clients/forester.png'
    },
    {
        src: 'img/clients/lazurit.png'
    },
    {
        src: 'img/clients/cy22.png'
    },
    {
        src: 'img/clients/keedo.png'
    },
    {
        src: 'img/clients/mnogo-mebeli.png'
    },
    {
        src: 'img/clients/homeme.png'
    },
    {
        src: 'img/clients/electrolux-2.png'
    },
    {
        src: 'img/clients/robot.png'
    },
    {
        src: 'img/clients/BLANCO-2.png'
    },
    {
        src: 'img/clients/Gustavsberg.png'
    },
    {
        src: 'img/clients/shatura.png'
    },
    {
        src: 'img/clients/toris.png'
    },
    {
        src: 'img/clients/lider.png'
    },
    {
        src: 'img/clients/husqvarna.png'
    },
    {
        src: 'img/clients/ampika.png'
    },
    {
        src: 'img/clients/europlast.png'
    },
    {
        src: 'img/clients/affresco.png'
    },

]

let clients = document.getElementById('clients-logos')

logos.forEach(item => {
    let newImg = document.createElement('img')
    newImg.setAttribute('src', item.src)
    clients.appendChild(newImg)
})