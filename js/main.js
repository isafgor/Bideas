//Якоря

$("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});


//position sticky для мобильного хедера

// let navigation = document.getElementById('navigation');
// let main = document.getElementById('main');

// function scrollFunction () {
//     if (document.body.clientWidth < 1025) {
//         if (window.scrollY > 80) {
//             navigation.style.position = 'fixed';
//             navigation.style.top = '-80px';
//             navigation.style.left = '0';
//             navigation.style.right = '0'
//             main.style.marginTop = '200px'
//         } else {
//             navigation.style.position = 'static';
//             navigation.style.top = 'auto';
//             navigation.style.left = 'auto';
//             navigation.style.right = 'auto'
//             main.style.marginTop = '42px'
//         }
//     } else {
//         navigation.style.position = 'relative';
//         navigation.style.top = 'auto';
//         navigation.style.left = 'auto';
//         navigation.style.right = 'auto'
//     }
// }

function openVideo (id, url) {
    let frame = document.getElementById('video')
    frame.setAttribute('src', url)

    displayModal(id, 'flex')
}

function displayModal (id, bool) {
    let body = document.body

    let modal = document.getElementById(id)

    let bideas = document.getElementById('bideas')


    if (bool !== 'none') {
        // body.style.overflowY = 'hidden'
        // body.style.width = 'calc(100% - 15px)'

        setTimeout(() => {
            modal.style.opacity = '1'
        }, 0)

        bideas.style.filter = 'blur(2px)'
        modal.style.display = bool
    } else {
        modal.style.opacity = '0'
        bideas.style.filter = 'none'

        setTimeout(() => {
            modal.style.display = bool
            // body.style.overflowY = 'auto'
            // body.style.width = '100%'
        }, 300)
    }
}


// Burger menu

// let burgerOn = false
// let burger = document.getElementById('burger')
// let mask = document.getElementById('burger-mask')
//
// function burgerMenu () {
//     burgerOn = !burgerOn
//
//     if (burgerOn) {
//         mask.style.display = 'block'
//         burger.classList.add('header-burger__cross')
//         setTimeout(() => {
//             mask.style.opacity = '1'
//         }, 0)
//     } else {
//         mask.style.opacity = '0'
//         burger.classList.remove('header-burger__cross')
//         setTimeout(() => {
//             mask.style.display = 'none'
//         }, 500)
//     }
// }

// navigation ? window.onscroll = scrollFunction : false;

function serviceDisplay (num) {
    let elements = document.querySelectorAll('.services__service')
    elements.forEach(item => {
        item.style.display = 'none'
    })

    let headlines = document.querySelectorAll('.services__names li')
    headlines.forEach(item => {
        item.classList.remove('active')
    })

    let element = document.querySelector(`.services__service:nth-of-type(${num})`)
    element.style.display = 'block'

    let headline = document.querySelector(`.services__names li:nth-of-type(${num})`)
    headline.classList.add('active')
}

serviceDisplay(1)

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