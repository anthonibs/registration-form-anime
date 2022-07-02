import {Validation} from '../controller/validation.js'

const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    // Monitor user input fields
    input.addEventListener('blur', monitoring => {
        Validation(monitoring.target)
    })
})

