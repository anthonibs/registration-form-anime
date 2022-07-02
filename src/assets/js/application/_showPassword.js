const showPassword = document.querySelector('[data-showPass]')
const iconShow = document.querySelector('[data-showPass] .bi')

// Event captures mouse click on eye icon to show/hide user password
showPassword.addEventListener('click', event => {
    const inputPass = document.querySelector('[password]')

    if (inputPass.getAttribute('type') === 'text') {
        setTimeout(function () {
            inputPass.setAttribute('type', 'password')
            changeIcon(iconShow, 'bi-eye-fill', 'bi-eye-slash-fill')
        }, 200)
    } else {
       setTimeout(function() {
        inputPass.setAttribute('type', 'text')
        changeIcon(iconShow, 'bi-eye-slash-fill', 'bi-eye-fill')
       }, 200)
    }

})

// Function fetches tag class and changing icons
function changeIcon(classTarget, icon1, icon2) {
    classTarget.classList.remove(icon1)
    classTarget.classList.add(icon2)
}
