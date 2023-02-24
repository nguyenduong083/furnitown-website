/* HOME */
function arrowMenu() {
    function menuHiden() {
        let menuBottom = document.querySelector('.slider .menu__bottom');
        window.addEventListener('scroll', function (e) {
            let positionScroll = this.window.pageYOffset;
            if (positionScroll >= 700) {
                menuBottom.classList.add('active')
            } else {
                menuBottom.classList.remove('active')
            }
        })
    }
    const menuhiden = document.querySelector('.slider .menu__bottom')
    if (menuhiden) {
        menuHiden()
    }
} arrowMenu()

function backtotop() {
    function backToTop() {
        let toTop = document.querySelector('footer .container .backtop span')
        toTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
    const totop = document.querySelector('footer .container .backtop span');
    if (totop) {
        backToTop()
    }
} backtotop()

function navMenu() {
    function navMENU() {
        let navMenu = document.querySelector('header .header-nav')
        let btnNav = document.querySelector('header .header-nav .btnnav')
        navMenu.addEventListener('click', function () {
            navMenu.classList.toggle('active')
            btnNav.classList.toggle('active')
        })
    }
    const navHome = document.querySelector('header .header-nav');
    if (navHome) {
        navMENU()
    }
} navMenu()

/* PRODUCT */
function hanhleProduct() {
    function productItem() {
        /* 1 */
        let imgProductItem1 = document.querySelector('.product__list-1 .product__list-bottom')
        var flktyImageEnd = new Flickity(imgProductItem1, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });

        /* 2 */
        let imgProductItem2 = document.querySelector('.product__list-2 .product__list-bottom')
        var flktyImageEnd = new Flickity(imgProductItem2, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });

        /* 3 */
        let imgProductItem3 = document.querySelector('.product__list-3 .product__list-bottom')
        var flktyImageEnd = new Flickity(imgProductItem3, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });

        /* 4 */
        let imgProductItem4 = document.querySelector('.product__list-4 .product__list-bottom')
        var flktyImageEnd = new Flickity(imgProductItem4, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });

        /* 2 */
        let imgProductItem5 = document.querySelector('.product__list-5 .product__list-bottom')
        var flktyImageEnd = new Flickity(imgProductItem5, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });
    }
    const product = document.querySelector('.product__list-1')
    if (product) {
        productItem()
    }
} hanhleProduct()
/* DETAIL PRODUCT */
function hanhleProductDetail() {

    function detailproduct() {
        /* 1 */
        let imgProductDetail = document.querySelector('.product__list-detail .product__list-bottom')
        var flktyImageEnd = new Flickity(imgProductDetail, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });
    }
    const product = document.querySelector('.product__list-detail')
    if (product) {
        detailproduct()
    }
} hanhleProductDetail()

/* NEXT PRE */
function hanhleDetail() {
    function hanhledetail() {
        let detailHanhLe = document.querySelector('.productdetail__item-left .imgproduct')
        var flktySlider = new Flickity(detailHanhLe, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });

        /* CONTROL */
        let btnPre = document.querySelector('.productdetail__item-left .btnnextpre .pre');
        let btnNext = document.querySelector('.productdetail__item-left .btnnextpre .next');

        btnPre.addEventListener('click', function () {
            flktySlider.previous(true)
        })
        btnNext.addEventListener('click', function () {
            flktySlider.next(true)
        })
    }
    const detailhl = document.querySelector('.productdetail__item-left')
    if (detailhl) {
        hanhledetail()
    }
} hanhleDetail()

/* NEWS */
function news() {
    let newlist = document.querySelectorAll('.news__list')
    let pages = document.querySelectorAll('.news__pages-item')

    pages.forEach(function (page) {
        page.addEventListener('click', function () {

            pages.forEach(function (page) {
                page.classList.remove('active')
            })
            page.classList.add('active')

            /* HIDE ALL NEWS LIST */
            newlist.forEach(function (lists) {
                lists.classList.remove('active')
            })
            let id = this.dataset.page
            /* ADD LIST */
            document.querySelector('.news__list-' + id).classList.add('active')
        })
    })
} news()

/* DETAIL PRODUCT */
function detailProducts() {
    let productlist = document.querySelectorAll('.product__workroom');
    let productpage = document.querySelectorAll('.product__list-top .right');
    let producthillden = document.querySelector('.product__list');
    productpage.forEach(function (list) {
        list.addEventListener('click', function () {

            producthillden.classList.add('active')

            productlist.forEach(function (listpro) {
                listpro.classList.remove('active')
            })
            let id = this.dataset.list
            document.querySelector('.product__workroom-' + id).classList.add('active')
        })
    })

} detailProducts()

/* BTN NEWS */
function btnproject() {
    function btnProject() {
        let btnproject = document.querySelector('.projecttitle .container .btnproject')
        btnproject.addEventListener('click', function (e) {
            btnproject.classList.toggle('active');
            e.stopPropagation();
        })
        document.addEventListener('click', function () {
            btnproject.classList.remove('active')
        })
        /* ********************************** */
        let btnSelect = document.querySelectorAll('.projecttitle .container .btnproject .btnproject-select .btnproject-select-item')

        let btnCurrent = document.querySelector('.projecttitle .container .btnproject-current span')
        btnSelect.forEach(function (item) {
            item.addEventListener('click', function () {
                /* gọi selecttext là text đang hiển thị  */
                let selectText = this.textContent
                /* gọi selectTextSpan là text phía dưới  */
                let selectTextSpan = btnCurrent.textContent

                /* khi click text phía dưới sẽ thay thế text đang hiển thị */
                btnCurrent.innerHTML = selectText;
                /* text đang hiển thị sẽ thay thế text phía dưới */
                this.innerHTML = selectTextSpan;
            })
        })
    }
    const projecttext = document.querySelector('.projecttitle .container .btnproject')
    if (projecttext) {
        btnProject()
    }
} btnproject()

/* new detail */
function hanhleNewstDetail() {

    function detailnews() {
        /* 1 */
        let imgNewsDetail = document.querySelector('.newsss__list-bottom')
        console.log(imgNewsDetail)
        var flktyImageEnd = new Flickity(imgNewsDetail, {
            // options
            imagesLoaded: true,
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            prevNextButtons: false,
            pageDots: false,
        });
    }
    const newsdetail = document.querySelector('.newsss__list-detail')
    if (newsdetail) {
        detailnews()
    }
} hanhleNewstDetail()


/* NAV MOBILE */
function navmobie() {
    function navMoible() {
        let btnnavmobile = document.querySelector('header .header-mobile .left')
        let navMOBILE = document.querySelector('header .header-mobile .header__mobile-hilden')
        btnnavmobile.addEventListener('click', function () {
            navMOBILE.classList.toggle('active')
            btnnavmobile.classList.toggle('active')
        })
    }
    const mobileNAV = document.querySelector('header .header-mobile')
    if (mobileNAV) {
        navMoible()
    }
} navmobie()

/* ZOOM IMAGE */
function zoomimg() {
    /* zoom img */
    function zoomIMG() {
        /* 1 */
        let zoom1 = document.querySelector('.imgzoom-1');
        let imgzoom1 = document.querySelector('.imgzoom-1 .zoom');
        imgzoom1.classList.add('active')
        zoom1.addEventListener('mousemove', (e) => {
            imgzoom1.style.opacity = 1;

            let positionPx = e.x - zoom1.getBoundingClientRect().left;
            let positionx = (positionPx / zoom1.offsetWidth) * 100;

            let positionPy = e.y - zoom1.getBoundingClientRect().top;
            let positiony = (positionPy / zoom1.offsetHeight) * 100;

            imgzoom1.style.setProperty('--zoom-x', positionx + '%');
            imgzoom1.style.setProperty('--zoom-y', positiony + '%');
        })
        zoom1.addEventListener('mouseout', (e) => {
            imgzoom1.style.opacity = 0;
        })
    }
    function zoomIMG2() {
        /* 2------------------------------ */
        
        let zoom2 = document.querySelector('.imgzoom-2');
        let imgzoom2 = document.querySelector('.imgzoom-2 .zoom');
        imgzoom2.classList.add('active')
        zoom2.addEventListener('mousemove', (e) => {
            imgzoom2.style.opacity = 1;

            let positionPx = e.x - zoom2.getBoundingClientRect().left;
            let positionx = (positionPx / zoom2.offsetWidth) * 100;

            let positionPy = e.y - zoom2.getBoundingClientRect().top;
            let positiony = (positionPy / zoom2.offsetHeight) * 100;

            imgzoom2.style.setProperty('--zoom-x', positionx + '%');
            imgzoom2.style.setProperty('--zoom-y', positiony + '%');
        })
        zoom2.addEventListener('mouseout', (e) => {
            imgzoom2.style.opacity = 0;
        })
    }
    function zoomIMG3() {
        /* 2------------------------------ */
        
        let zoom3 = document.querySelector('.imgzoom-3');
        let imgzoom3 = document.querySelector('.imgzoom-3 .zoom');
        imgzoom3.classList.add('active')
        zoom3.addEventListener('mousemove', (e) => {
            imgzoom3.style.opacity = 1;

            let positionPx = e.x - zoom3.getBoundingClientRect().left;
            let positionx = (positionPx / zoom3.offsetWidth) * 100;

            let positionPy = e.y - zoom3.getBoundingClientRect().top;
            let positiony = (positionPy / zoom3.offsetHeight) * 100;

            imgzoom3.style.setProperty('--zoom-x', positionx + '%');
            imgzoom3.style.setProperty('--zoom-y', positiony + '%');
        })
        zoom3.addEventListener('mouseout', (e) => {
            imgzoom3.style.opacity = 0;
        })
    }
    let btnzoom = document.querySelector('.productdetail__item-left .btnzoom')
        btnzoom.addEventListener('click',function(){
        zoomIMG()
        zoomIMG2()
        zoomIMG3()
    })

}
const imgZOOM = document.querySelector('.imgzoom-1');
if (imgZOOM) {
    zoomimg()
}