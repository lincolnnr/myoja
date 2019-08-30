const express = require('express')
const router = express.Router()

const Customer = require('./../schemas/customer')

router.get('/', (req, res) => {
    return res.render('account/index',{
        title: 'Account',
        layout: 'layout/main',
        user: req.user || undefined
    })
})

router.get('/new', (req, res) => {
    const customer = new Customer()
    return res.render('account/new',{
        title: 'Account - Resgister',
        customer: customer,
        layout: 'layout/main',
        user: req.user || undefined
    })
})

router.post('/', require('./../services/account/create'))
router.post('/login', require('./../services/account/login'))
router.get('/:slug', require('./../services/account/show'))

module.exports = router