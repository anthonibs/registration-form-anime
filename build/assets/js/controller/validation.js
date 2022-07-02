export function Validation(input) {
    const datasetType = input.dataset.type

    const teste = document.querySelector('.form__form-warpper')
    console.log(msgError(datasetType, input));

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.error-span').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.error-span').innerHTML = msgError(datasetType, input)
    }

}

const arrValidity = [
    'valueMissing',
    'customError',
    'typeMismatch',
    'patternMismatch'
]


const errorMessageList = {
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.',
    },
    name: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter 6 a 10 caracteres, deve conter pelo menos uma letra maiúscula, minuscula e um número.'
    }
}

function msgError(typeInput, input) {
    let message = ''
    arrValidity.forEach(nameErro => {
        if(input.validity[nameErro]) {
            message = errorMessageList[typeInput][nameErro]
        }
    })

    return message
}