const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Customer = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    telefone: {
        type: String,
        default: ''
    },
    whatsapp: {
        type: String,
        default: ''
    },
    cpf: {
        type: String,
        required: true
    },
    nascimento: {
        day: {
            type: Number,
            require:true,
            default: ''
        },
        month: {
            type: Number,
            require:true,
            default: ''
        },
        year: {
            type: Number,
            require:true,
            default: ''
        }
    },
    address: {
        endereco: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    }
    
})

Customer.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('Customer', Customer)