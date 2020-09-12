"use strict";
//Плавная прокрутка
$("body").on('click', '[href*="#"]', function (e) {
    let fixedOffset = 0;
    if (document.documentElement.clientWidth < 768) {
        fixedOffset = 70;
    }
    else {
        fixedOffset = 16;
    }
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
    e.preventDefault();
});
// Затемнение хедера при скролле
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.pageYOffset > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

};
// Слайдер галереи
var swiper = new Swiper('.gallery-swiper', {
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery__arrow_next',
        prevEl: '.gallery__arrow_prev',
    },
});
// Слайдер кепок
var swiper = new Swiper('.caps-swiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.caps__arrow_next',
        prevEl: '.caps__arrow_prev',
    },
    speed: 500,
    simulateTouch: false,
    allowTouchMove: false,
});
// Слайдер кепок(номера)
var swiper = new Swiper('.caps-swiper-num', {
    effect: 'flip',
    flipEffect: {
        shadow: false,
        slideShadows: false,
    },
    spaceBetween: 2000,
    navigation: {
        nextEl: '.caps__arrow_next',
        prevEl: '.caps__arrow_prev',
    },
    speed: 500,
    simulateTouch: false,
});
/* Модальные окна */

/* 1 */
// открыть по кнопке
$('.js-button-campaign-1').click(function () {
    $('.js-overlay-campaign-1').fadeIn();
    $('.js-overlay-campaign-1').addClass('disabled');
    $('.body').addClass('lock');
});
// закрыть на крестик
$('.js-close-campaign-1').click(function () {
    $('.js-overlay-campaign-1').fadeOut();
    $('.body').removeClass('lock');
});
/* 2 */
$('.js-button-campaign-2').click(function () {
    $('.js-overlay-campaign-2').fadeIn();
    $('.js-overlay-campaign-2').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-2').click(function () {
    $('.js-overlay-campaign-2').fadeOut();
    $('.body').removeClass('lock');
});
/* 3 */
$('.js-button-campaign-3').click(function () {
    $('.js-overlay-campaign-3').fadeIn();
    $('.js-overlay-campaign-3').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-3').click(function () {
    $('.js-overlay-campaign-3').fadeOut();
    $('.body').removeClass('lock');
});
/* 4 */
$('.js-button-campaign-4').click(function () {
    $('.js-overlay-campaign-4').fadeIn();
    $('.js-overlay-campaign-4').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-4').click(function () {
    $('.js-overlay-campaign-4').fadeOut();
    $('.body').removeClass('lock');
});
/* 5 */
$('.js-button-campaign-5').click(function () {
    $('.js-overlay-campaign-5').fadeIn();
    $('.js-overlay-campaign-5').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-5').click(function () {
    $('.js-overlay-campaign-5').fadeOut();
    $('.body').removeClass('lock');
});
/* 6 */
$('.js-button-campaign-6').click(function () {
    $('.js-overlay-campaign-6').fadeIn();
    $('.js-overlay-campaign-6').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-6').click(function () {
    $('.js-overlay-campaign-6').fadeOut();
    $('.body').removeClass('lock');
});
/* 7 */
$('.js-button-campaign-7').click(function () {
    $('.js-overlay-campaign-7').fadeIn();
    $('.js-overlay-campaign-7').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-7').click(function () {
    $('.js-overlay-campaign-7').fadeOut();
    $('.body').removeClass('lock');
});
/* 8 */
$('.js-button-campaign-8').click(function () {
    $('.js-overlay-campaign-8').fadeIn();
    $('.js-overlay-campaign-8').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-8').click(function () {
    $('.js-overlay-campaign-8').fadeOut();
    $('.body').removeClass('lock');
});
/* 9 */
$('.js-button-campaign-9').click(function () {
    $('.js-overlay-campaign-9').fadeIn();
    $('.js-overlay-campaign-9').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-9').click(function () {
    $('.js-overlay-campaign-9').fadeOut();
    $('.body').removeClass('lock');
});
/* 10 */
$('.js-button-campaign-10').click(function () {
    $('.js-overlay-campaign-10').fadeIn();
    $('.js-overlay-campaign-10').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-10').click(function () {
    $('.js-overlay-campaign-10').fadeOut();
    $('.body').removeClass('lock');
});
/* 11 */
$('.js-button-campaign-11').click(function () {
    $('.js-overlay-campaign-11').fadeIn();
    $('.js-overlay-campaign-11').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-11').click(function () {
    $('.js-overlay-campaign-11').fadeOut();
    $('.body').removeClass('lock');
});
/* 12 */
$('.js-button-campaign-12').click(function () {
    $('.js-overlay-campaign-12').fadeIn();
    $('.js-overlay-campaign-12').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-12').click(function () {
    $('.js-overlay-campaign-12').fadeOut();
    $('.body').removeClass('lock');
});
/* 13 */
$('.js-button-campaign-13').click(function () {
    $('.js-overlay-campaign-13').fadeIn();
    $('.js-overlay-campaign-13').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-13').click(function () {
    $('.js-overlay-campaign-13').fadeOut();
    $('.body').removeClass('lock');
});
/* 14 */
$('.js-button-campaign-14').click(function () {
    $('.js-overlay-campaign-14').fadeIn();
    $('.js-overlay-campaign-14').addClass('disabled');
    $('.body').addClass('lock');
});
$('.js-close-campaign-14').click(function () {
    $('.js-overlay-campaign-14').fadeOut();
    $('.body').removeClass('lock');
});
// ВСЕ ПЕРЕМЕННЫЕ
let requestSelect = document.querySelector('.request-form__list');
let requestName = document.querySelector('.request-form__input_name');
let requestSize = document.querySelector('.request-form__list');
let requestFormInputName = document.querySelector('.request-form__input_name');
let requestFormPlaceholderName = document.querySelector('.request-form__placeholder_name');
let popupSizeButton = document.querySelectorAll('.popup-info__size');
let popupImg = document.querySelectorAll('.popup__suit');
let popupTable = document.querySelectorAll('.popup__table');
let popupSelect = document.querySelectorAll('.popup-info__select');
let popupPrice = document.querySelectorAll('.popup-info__price');
let popupButton = document.querySelectorAll('.popup-info__button');
let popupName = document.querySelectorAll('.popup-info__name');
let popupSize = document.querySelectorAll('.popup-info__select');
let suitBag = document.querySelectorAll('.suits-block__info>svg');
let galleryArrowPrev = document.querySelector('.gallery__arrow_prev>img');
let galleryArrowNext = document.querySelector('.gallery__arrow_next>img');
let capsArrowPrev = document.querySelector('.caps__arrow_prev>img');
let capsArrowNext = document.querySelector('.caps__arrow_next>img');
let footerBody = document.querySelector('.footer__body');
let suitsPrice = document.querySelectorAll('.suits-block__price');
let suitsCollectionLinks = document.querySelectorAll('.suits-collection__link');
let suitsBlocks = document.querySelectorAll('.suits-block');
let capsInfoButton = document.querySelectorAll('.caps-info__button');
let capsInfoName = document.querySelectorAll('.caps-info__name');
// Изменение цвета select(Request form) при выборе option
requestSelect.onchange = () => requestSelect.style.color = 'black';
/* Показать таблицу размеров */
for (let i = 0; i < popupSizeButton.length; i++) {
    popupSizeButton[i].addEventListener("click", () => {
        switch (window.getComputedStyle(popupTable[i]).display) {
            case 'none':
                popupImg[i].style.display = 'none';
                popupTable[i].style.display = 'block';
                break;
            case 'block':
                popupImg[i].style.display = 'block';
                popupTable[i].style.display = 'none';
                break;
        }
    });
}
// Изменение цвета select(Popup) при выборе option и изменение цены при выборе Индивидуального пошива
for (let i = 0; i < popupSelect.length; i++) {
    popupSelect[i].onchange = () => {
        popupSelect[i].style.color = 'black';
        if (popupSelect[i].value == 'individual') {
            popupPrice[i].innerHTML = '<span>Цена:</span> 260 BYN';
        }
        else if (popupPrice[i].classList.contains('popup-info__price_new')) {
            popupPrice[i].innerHTML = '<span>Цена:</span> 219 BYN';
        }
        else {
            popupPrice[i].innerHTML = '<span>Цена:</span> 199 BYN';
        }
    };
}
// Закрытие popup окна и перенос данных в форму для заявки
for (let i = 0; i < popupButton.length; i++) {
    popupButton[i].addEventListener("click", () => {
        if (popupSize[i].value != "Выберите размер") {
            $('.js-overlay-campaign').fadeOut();
            $('.body').removeClass('lock');
            $('html,body').animate({ scrollTop: $('.request').offset().top - 35 + "px" }, { duration: 1E3 });
            requestFormInputName.classList.remove('disabled');
            requestFormInputName.classList.add('active');
            requestFormPlaceholderName.classList.add('active');
            requestSelect.removeAttribute('disabled', '');
            if (i < 9) {
                requestSelect.innerHTML =
                `   
                    <select name="suit_size" class="request-form__list" required>
                    <option value="">Выберите размер</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="individual">Индивидуальный пошив</option>
                    </select>
                `;
            }
            else {
                requestSelect.innerHTML =
                `   
                    <select class="popup-info__select">
                        <option selected disabled>Выберите размер</option>
                        <option value="3XS">3XS</option>
                        <option value="2XS">2XS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="3XL">3XL</option>
                        <option value="4XL">4XL</option>
                        <option value="5XL">5XL</option>
                    </select>
                `;
            }
            requestName.value = popupName[i].textContent.slice(10);
            requestSize.value = popupSize[i].value;
            requestSelect.style.color = 'black';
        }
    });
}
// Перенос пользователя к оформлению заявки при клике на корзину
for (let i = 0; i < suitBag.length; i++) {
    suitBag[i].addEventListener("click", () => {
        $('html,body').animate({
            scrollTop: $('.request').offset().top - 35 + "px"
        }, {
            duration: 1E3
        });
        requestFormInputName.classList.remove('disabled');
        requestFormInputName.classList.add('active');
        requestFormPlaceholderName.classList.add('active');
        requestSelect.removeAttribute('disabled', '');
        if (i < 9) {
            requestSelect.innerHTML =
            `   
                <select name="suit_size" class="request-form__list" required>
                <option value="">Выберите размер</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="individual">Индивидуальный пошив</option>
                </select>
            `;
        }
        else {
            requestSelect.innerHTML =
            `   
                <select class="popup-info__select">
                    <option value="">Выберите размер</option>
                    <option value="3XS">3XS</option>
                    <option value="2XS">2XS</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                    <option value="3XL">3XL</option>
                    <option value="4XL">4XL</option>
                    <option value="5XL">5XL</option>
                </select>
            `;
        }
        requestName.value = popupName[i].textContent.slice(10);
        requestSelect.value = '';
        requestSelect.style.color = 'black';
    });
}
// Закрытие thank-popup
$('#thank-close').click(function () {
    $('.thank-popup').fadeOut();
});
// Маска на ввод номера телефона
$("#request_phonemask").mask("+375(99)999-99-99");
// Замена стрелок в галерее и кепках для планшетов и замена футера
if (document.documentElement.clientWidth < 992) {
    galleryArrowPrev.src = "img/icons/arrowGalleryPrevSmall.svg";
    galleryArrowNext.src = "img/icons/arrowGalleryNextSmall.svg";
    capsArrowPrev.src = "img/icons/arrowGalleryPrevSmall.svg";
    capsArrowNext.src = "img/icons/arrowGalleryNextSmall.svg";
    // Замена футера
    footerBody.innerHTML = 
    `     <div class="footer__left">
            <div class="logo"><a href="#body"><img src="img/logo.png" alt="no image" class="img"></a></div>
            <ul class="footer-menu">
                <li class="footer-menu__item"><a href="#suits" class="footer-menu__link">Костюмы</a></li>
                <li class="footer-menu__item"><a href="#composition" class="footer-menu__link">Состав костюма</a></li>
                <li class="footer-menu__item"><a href="#gallery" class="footer-menu__link">Галерея</a></li>
                <li class="footer-menu__item"><a href="#contacts" class="footer-menu__link">Контакты</a></li>
            </ul>
            <div class="footer-block__socials">
                <a href="https://www.instagram.com/gentlemens_minsk/?igshid=bqo1s13rv8mw" target="_blank"><img src="img/icons/instagram.svg" alt="Инстаграм"></a>
                <a href="https://www.facebook.com/gentlemens_minsk-105827207834863/" target="_blank"><img src="img/icons/facebook.svg" alt="Фейсбук"></a>
                <a href="https://vk.com/club197250625" target="_blank"><img src="img/icons/vk.svg" alt="Вконтакте"></a>
                <a href="https://www.tiktok.com/@gentlemens_minsk?_d=secCgsIARCbDRgBIAMoARI%2BCjwSwpGgR7nTFU0kScSOJccpDBJoU3lA%2FFoMiBm8e7PXDPagigw0yMzVdABdOUUDBlalBIvycZ46aKfMAGYaAA%3D%3D&language=ru&sec_uid=MS4wLjABAAAA0nfxT4tdgD7Iu1aKv5MTN3OxgSvQhd8cx38RNzN9eJLUIb23k1mcKxuxid92syiD&sec_user_id=MS4wLjABAAAAvI9GPCH-SXW_5M8eFvrgHt9ciAJEWXKQezRQ0ADqac7_lg9mcamgkAX95ByKyI58&share_app_name=musically&share_author_id=6763245027143123973&share_link_id=0f5fdd16-2af2-4d51-8993-17e0dc9965f6&timestamp=1598875475&u_code=ddg1fk0m1bkd42&user_id=6852677792204358661&utm_campaign=client_share&utm_medium=android&utm_source=vk&source=h5_m" target="_blank"><img src="img/icons/tiktok.svg" alt="TikTok"></a>
                <a href="https://ok.ru/group/58407448019160" target="_blank"><img src="img/icons/ok.svg" alt="Одноклассники"></a>
            </div>
          </div>
          <div class="footer__right">
            <div class="footer-contacts">
              <div class="footer-phone">
                <img src="img/icons/phoneFooter.svg" alt="Телефоны:">
                <div class="footer-phone__links">
                    <a href="tel:+375293428554">+ 375 (29) 342 - 85 - 54</a>
                </div>
              </div>
            </div>
            <div class="footer-block">
                <span class="footer-block__schedule">пн - вс : 9 : 00 - 21 : 00</span>
                <a class="footer-block__link" href="mailto:gentlemens.minsk.biz@gmail.com">gentlemens.minsk.biz@gmail.com</a>
            </div>
            <a href="#request" class="footer-contacts__button">
                <span class="footer-contacts__link">Заказать сейчас</span>
                <img src="img/icons/arrowIntroRight.svg" alt="no image" class="footer-contacts__arrow">
            </a>
          </div>
    `;
}
// Замена стрелок в галерее и кепках для телефонов
if (document.documentElement.clientWidth < 576) {
    galleryArrowPrev.src = "img/icons/arrowGalleryPrevSmallPhone.svg";
    galleryArrowNext.src = "img/icons/arrowGalleryNextSmallPhone.svg";
    capsArrowPrev.src = "img/icons/arrowGalleryPrevSmallPhone.svg";
    capsArrowNext.src = "img/icons/arrowGalleryNextSmallPhone.svg";
    // Замена футера
    footerBody.innerHTML =
        ` <div class="footer__left">
            <div class="logo"><a href="#body"><img src="img/logo.png" alt="no image" class="img"></a></div>
          </div>
          <div class="footer__right">
            <div class="footer-contacts">
              <div class="footer-phone">
                <img src="img/icons/phoneFooter.svg" alt="Телефоны:">
                <div class="footer-phone__links">
                    <a href="tel:+375293428554">+ 375 (29) 342 - 85 - 54</a>
                </div>
              </div>
            </div>
            <div class="footer-block">
                <span class="footer-block__schedule">пн - вс : 9 : 00 - 21 : 00</span>
                <a class="footer-block__link" href="mailto:gentlemens.minsk.biz@gmail.com">gentlemens.minsk.biz@gmail.com</a>
            </div>
            <a href="#request" class="footer-contacts__button">
                <span class="footer-contacts__link">Заказать сейчас</span>
                <img src="img/icons/arrowIntroRight.svg" alt="no image" class="footer-contacts__arrow">
            </a>
            <div class="footer-block__socials">
                <a href="https://www.instagram.com/gentlemens_minsk/?igshid=bqo1s13rv8mw" target="_blank"><img src="img/icons/instagram.svg" alt="Инстаграм"></a>
                <a href="https://www.facebook.com/gentlemens_minsk-105827207834863/" target="_blank"><img src="img/icons/facebook.svg" alt="Фейсбук"></a>
                <a href="https://vk.com/club197250625" target="_blank"><img src="img/icons/vk.svg" alt="Вконтакте"></a>
                <a href="https://www.tiktok.com/@gentlemens_minsk?_d=secCgsIARCbDRgBIAMoARI%2BCjwSwpGgR7nTFU0kScSOJccpDBJoU3lA%2FFoMiBm8e7PXDPagigw0yMzVdABdOUUDBlalBIvycZ46aKfMAGYaAA%3D%3D&language=ru&sec_uid=MS4wLjABAAAA0nfxT4tdgD7Iu1aKv5MTN3OxgSvQhd8cx38RNzN9eJLUIb23k1mcKxuxid92syiD&sec_user_id=MS4wLjABAAAAvI9GPCH-SXW_5M8eFvrgHt9ciAJEWXKQezRQ0ADqac7_lg9mcamgkAX95ByKyI58&share_app_name=musically&share_author_id=6763245027143123973&share_link_id=0f5fdd16-2af2-4d51-8993-17e0dc9965f6&timestamp=1598875475&u_code=ddg1fk0m1bkd42&user_id=6852677792204358661&utm_campaign=client_share&utm_medium=android&utm_source=vk&source=h5_m" target="_blank"><img src="img/icons/tiktok.svg" alt="TikTok"></a>
                <a href="https://ok.ru/group/58407448019160" target="_blank"><img src="img/icons/ok.svg" alt="Одноклассники"></a>
            </div>
          </div>
    `;
}
// Меню для телефонов
$(document).ready(function () {
    $(".header__burger").click(function (e) {
        $(".header__burger, .menu").toggleClass("active");
        $(".body").toggleClass('lock');
    });
    $(".menu__link").click(function (e) {
        $(".header__burger").removeClass("active");
        $(".menu").removeClass("active");
        $(".body").removeClass("lock");
    });
});
// Прайс костюмов(Suits)
suitsPrice.forEach(element => {
    element.textContent = '199 BYN.';
    if (element.classList.contains('suits-block__price_new')) {
        element.textContent = '219 BYN.';
    }
});
// Прайс костюмов(Popup)
popupPrice.forEach(element => {
    element.innerHTML = '<span>Цена:</span> 199 BYN';
    if (element.classList.contains('popup-info__price_new')) {
        element.innerHTML = '<span>Цена:</span> 219 BYN';
    }
});
// Табы костюмов
for (let i = 0; i < suitsCollectionLinks.length; i++) {
    suitsCollectionLinks[i].addEventListener("click", () => {
        suitsCollectionLinks.forEach(element => {
            element.style.color = 'rgba(0, 0, 0, 0.5)';
            element.style.borderBottom = 'none';
        });
        suitsCollectionLinks[i].style.color = '#DB4C4C';
        suitsCollectionLinks[i].style.borderBottom = '2px solid #DB4C4C';
        suitsBlocks.forEach(element => {
            element.style.display = 'none';
        });
        if (i == 1) {
            for (let i = 0; i < 9; i++) {
                suitsBlocks[i].style.display = 'block';
            }
        }
        else if (i == 2) {
            for (let i = 9; i < suitsBlocks.length; i++) {
                suitsBlocks[i].style.display = 'block';
                if (document.documentElement.clientWidth > 767) {
                    suitsBlocks[9].style.marginRight = '100px';
                    suitsBlocks[10].style.marginRight = '0';
                    suitsBlocks[11].style.marginRight = '100px';
                    suitsBlocks[12].style.marginRight = '0';
                }
                if (document.documentElement.clientWidth > 991) {
                    suitsBlocks[9].style.marginRight = '45px';
                    suitsBlocks[10].style.marginRight = '45px';
                    suitsBlocks[11].style.marginRight = '0';
                    suitsBlocks[12].style.marginRight = '45px';
                }
            }
        }
        else {
            suitsBlocks.forEach(element => {
                element.style.display = 'block';
            });
            if (document.documentElement.clientWidth > 767) {
                suitsBlocks[9].style.marginRight = '0';
                suitsBlocks[10].style.marginRight = '100px';
                suitsBlocks[11].style.marginRight = '0';
                suitsBlocks[12].style.marginRight = '100px';
            }
            if (document.documentElement.clientWidth > 991) {
                suitsBlocks[9].style.marginRight = '45px';
                suitsBlocks[10].style.marginRight = '45px';
                suitsBlocks[11].style.marginRight = '0px';
                suitsBlocks[12].style.marginRight = '45px';
            }
        }
    });
}
// Перенос пользователя к оформлению заявки при клике на кепку
for (let i = 0; i < capsInfoButton.length; i++) {
    capsInfoButton[i].addEventListener("click", () => {
        $('html,body').animate({
            scrollTop: $('.request').offset().top - 35 + "px"
        }, {
            duration: 1E3
        });
        requestFormInputName.classList.remove('disabled');
        requestFormInputName.classList.add('active');
        requestFormPlaceholderName.classList.add('active');
        requestName.value = capsInfoName[i].textContent;
        requestSelect.value = '';
        requestSelect.setAttribute('disabled', '');
    });
}