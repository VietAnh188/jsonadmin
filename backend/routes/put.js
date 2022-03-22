const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.put('/update', async (req, res) => {
    const { accountId, password, ...remainInfo } = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newInfo = {
            ...remainInfo,
            password: hashedPassword,
        }
        const result = await User.findByIdAndUpdate(accountId, {
            $set: newInfo,
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router
