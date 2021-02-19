$(function () {

    $(function () {
        $(".phone").mask("+7(999)999-99-99");
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });


    const phone = document.getElementById('phone')
    const checkbox = document.getElementById('checkbox')
    const form = document.getElementById('appointment__form')
    const errorElement = document.getElementById('error')

    form.addEventListener('submit', (e) => {
        let messages = []
        if (phone.value === '' || phone.value == null || phone.value.length < 16) {
            messages.push('Введите номер телефона!')
        }
        else if (!checkbox.checked) {
            messages.push('Подтвердите согласие!')
        }
        else if (checkbox.checked) {
            messages.push('Спасибо, наш менеджер свяжется с Вами в ближайшее время.')
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join('! ')
        }
    })

    const phoneBottom = document.getElementById('phone-bottom')
    const checkboxBottom = document.getElementById('checkbox-bottom')
    const formBottom = document.getElementById('appointment__form-bottom')
    const errorElementBottom = document.getElementById('error-bottom')

    formBottom.addEventListener('submit', (e) => {
        let messagesBottom = []
        if (phoneBottom.value === '' || phoneBottom.value == null || phoneBottom.value.length < 16) {
            messagesBottom.push('Введите номер телефона!')
        }
        else if (!checkboxBottom.checked) {
            messagesBottom.push('Подтвердите согласие!')
        }
        else if (checkboxBottom.checked) {
            messagesBottom.push('Спасибо, наш менеджер свяжется с Вами в ближайшее время.')
        }
        if (messagesBottom.length > 0) {
            e.preventDefault()
            errorElementBottom.innerText = messagesBottom.join('! ')
        }
    })

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