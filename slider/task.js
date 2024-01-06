"use strict";

document.addEventListener("DOMContentLoaded", function() {

    let allSliderItems = [...document.querySelectorAll('.slider__item')];
    let arrowBefore = document.querySelector('.slider__arrow_prev');
    let arrowNext = document.querySelector('.slider__arrow_next');

    function getActiveIndex() {
        return allSliderItems.findIndex(item => item.className.includes('slider__item_active'));
    }

    function addActiveClass(index) {
        allSliderItems[index].classList.add('slider__item_active');
    }

    function setActiveItem(index) {

        let activatedIndex = getActiveIndex();
        allSliderItems[activatedIndex].classList.remove('slider__item_active');

        if (index >= allSliderItems.length) {
            index = 0;
        } else if (index < 0) {
            index = (allSliderItems.length - 1);
        }
        addActiveClass(index);
    }

    arrowBefore.addEventListener('click', function() {
        setActiveItem(getActiveIndex() - 1);
    })

    arrowNext.addEventListener('click', function() {
        setActiveItem(getActiveIndex() + 1);
    })    

})