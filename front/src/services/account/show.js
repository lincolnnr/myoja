const Custumer = require('./../../schemas/customer')

module.exports = (req, res) => {
    Custumer
        .findOne({
            slug:req.params.slug
        })
        .then((Custumer) => {
            if(!customer){
                return res.redirect('/')
            }
            
            customer = customer.toObject()

            customer.nascimento = customer.nascimento.day + '/' + customer.nascimento.moth + '/' + customer.nascimento.year
            return res.render('account/my-account', {
                title: 'Minha Conta',
                customer: customer,
                layout: 'layout/main',
                user: req.user || undefined
            })
            .catch((error) => {
                return ''
            })
        })
}