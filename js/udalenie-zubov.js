$(function () {

    $(function () {
        $(".phone").mask("+7(999)999-99-99");
    });

    $('.menu__btn').on('click', function () {
        $('.header__bottom').toggleClass('header__bottom--active')
    });

    const phoneModal = document.getElementById('phone-modal')
    const checkboxModal = document.getElementById('checkbox-modal')
    const formModal = document.getElementById('modal-form')
    const errorElementModal = document.getElementById('error-modal')

    formModal.addEventListener('submit', (e) => {
        let messagesModal = []
        if (phoneModal.value === '' || phoneModal.value == null || phoneModal.value.length < 16) {
            messagesModal.push('Введите номер телефона!')
        }
        else if (!checkboxModal.checked) {
            messagesModal.push('Подтвердите согласие!')
        }
        else if (checkboxModal.checked) {
            messagesModal.push('Спасибо, наш менеджер свяжется с Вами в ближайшее время.')
        }
        if (messagesModal.length > 0) {
            e.preventDefault()
            errorElementModal.innerText = messagesModal.join('! ')
        }
    })

});