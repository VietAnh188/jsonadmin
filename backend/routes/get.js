const router = require('express').Router()
const User = require('../models/User')

router.get('/getaccount/:value', async (req, res) => {
    const accountId = req.params.value
    try {
        const account = await User.findById(accountId)
        return res.status(200).json(account)
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get('/getaccounts', async (req, res) => {
    try {
        const all = await User.find(req.body)
        return res.status(200).json(all)
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get('/count', async (req, res) => {
    try {
        const count = await User.countDocuments(req.body)
        return res.status(200).json({ count: `${count}` })
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router
