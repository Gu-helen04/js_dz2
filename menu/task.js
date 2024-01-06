document.addEventListener("DOMContentLoaded", function() {
    let Menus = [...document.querySelectorAll('.menu_main')];

    for (let BurMenu of Menus) {
        let menuLinks = [...BurMenu.querySelectorAll('.menu__link')];

        for (let link of menuLinks) {

            let parentElement = link.closest('.menu__item');
            let menuSub = parentElement.querySelector('.menu_sub');

            if (menuSub != null) {
                link.addEventListener('click', function(click) {
                    click.preventDefault();
                    menuSub.classList.toggle('menu_active');
                })
            } 
        }
    }
})