export function Validation(input) {
    const datasetType = input.dataset.type

   
    console.log(msgError(datasetType, input));
    msgError(datasetType, input)
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