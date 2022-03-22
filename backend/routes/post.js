const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require('bcrypt')

router.post('/add', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            age: req.body?.age,
            gender: req.body?.gender,
            birthday: req.body?.birthday,
        })

        const user = await newUser.save()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router
