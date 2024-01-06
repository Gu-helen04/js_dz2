document.addEventListener("DOMContentLoaded", function() {

    const ModalMain = document.getElementById('modal_main');
    const ModalShow = [...document.getElementsByClassName('show-success')][0];
    const ModalSuccess = document.getElementById('modal_success');
    const ModalClose = [...document.querySelectorAll('.modal__content div')];
    ModalMain.classList.add('modal_active');
    ModalShow.addEventListener('click', function() {
        ModalMain.classList.remove('modal_active');
        ModalSuccess.classList.add('modal_active');
    });

    for (let modal of ModalClose) {
        modal.addEventListener('click', function() {
            ModalMain.classList.remove('modal_active');
            ModalSuccess.classList.remove('modal_active');
        })
    };
})