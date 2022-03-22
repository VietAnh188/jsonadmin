const router = require('express').Router()
const User = require('../models/User')

router.delete('/remove', async (req, res) => {
    try {
        const account = await User.findByIdAndDelete(req.body.accountId)
        return res.status(200).json(account)
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.delete('/removes', async (req, res) => {
    try {
        const result = await User.collection.deleteMany(req.body)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router
