$(function () {

    $(function () {
        $(".phone").mask("+7(999)999-99-99");
    });

    $('.menu__btn').on('click', function () {
        $('.header__bottom').toggleClass('header__bottom--active')
    });

    const phone = document.getElementById('phone')
    const checkbox = document.getElementById('checkbox')
    const form = document.getElementById('appointment__form')
    // const errorElement = document.getElementById('error')
    // const successElement = document.getElementById('success')
    const messageElement = document.getElementById('appointment-message')

    form.addEventListener('submit', (e) => {
        let messages = []
        if (phone.value === '' || phone.value == null || phone.value.length < 16) {
            messages.push('Введите номер телефона!')
        }
        else if (!checkbox.checked) {
            messages.push('Подтвердите согласие!')
        }
        else if (checkbox.checked) {
            messages.push('Спасибо, наш менеджер свяжется с Вами в ближайшее время.');
            document.getElementById('appointment__form').hidden = true;
        }
        if (messages.length > 0) {
            e.preventDefault()
            messageElement.innerText = messages.join('! ')
        }
    })

    const phoneBottom = document.getElementById('phone-bottom')
    const checkboxBottom = document.getElementById('checkbox-bottom')
    const formBottom = document.getElementById('appointment__form-bottom')
    // const errorElementBottom = document.getElementById('error-bottom')
    const messageElementBottom = document.getElementById('appointment-message-bottom')

    formBottom.addEventListener('submit', (e) => {
        let messagesBottom = []
        if (phoneBottom.value === '' || phoneBottom.value == null || phoneBottom.value.length < 16) {
            messagesBottom.push('Введите номер телефона!')
        }
        else if (!checkboxBottom.checked) {
            messagesBottom.push('Подтвердите согласие!')
        }
        else if (checkboxBottom.checked) {
            messagesBottom.push('Спасибо, наш менеджер свяжется с Вами в ближайшее время.');
            document.getElementById('appointment__form-bottom').hidden = true;
        }
        if (messagesBottom.length > 0) {
            e.preventDefault()
            messageElementBottom.innerText = messagesBottom.join('! ')
        }
    })

    const phoneModal = document.getElementById('phone-modal')
    const checkboxModal = document.getElementById('checkbox-modal')
    const formModal = document.getElementById('modal-form')
    // const errorElementModal = document.getElementById('error-modal')
    const messageElementModal = document.getElementById('success-message-modal')

    formModal.addEventListener('submit', (e) => {
        let messagesModal = []
        if (phoneModal.value === '' || phoneModal.value == null || phoneModal.value.length < 16) {
            messagesModal.push('Введите номер телефона!')
        }
        else if (!checkboxModal.checked) {
            messagesModal.push('Подтвердите согласие!')
        }
        else if (checkboxModal.checked) {
            messagesModal.push('Спасибо, наш менеджер свяжется с Вами в ближайшее время.');
            document.getElementById('modal-form').hidden = true;
            document.getElementById('modal-title').hidden = true;
            document.getElementById('modal-text').hidden = true;
        }
        if (messagesModal.length > 0) {
            e.preventDefault()
            messageElementModal.innerText = messagesModal.join('! ')
        }
    })
    
});