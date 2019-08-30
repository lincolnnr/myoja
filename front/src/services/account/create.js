const Custumer = require('./../../schemas/customer')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
    let nascimento = req.body.nascimento.toString().split('/')
    let slug = slugfy(req.body.nome)

    let data = {
        nome: req.body.nome,
        email: req.body.email,
        slug: slug,
        telefone: req.body.telefone,
        whatsapp: req.body.whatsapp,
        cpf: req.body.cpf,
        nascimento: {
            day: nascimento[0],
            month: nascimento[1],
            year: nascimento[2]
        },
        address: {
            endereco: req.body.endereco,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            cep: req.body.cep,
            estado: req.body.estado
        }
    }

    Custumer.register(data, req.body.password, (error, account) => {
        if(error){
            return res.redirect('/')
        }

        return res.redirect('/account')
    })
}