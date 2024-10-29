const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

//register
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await (users.findOne({ email: email }));
        if (existingUser) {
            res.status(406).json('account already exists')
        } else {
            const newUser = new users({
                username,
                email,
                password,

            })

            await newUser.save()
            res.status(201).json({
                data: newUser,
            });
        }

    } catch (err) {
        res.status(401).json(err)
    }
}


//login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await users.findOne({ email: email, password: password });
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, 'shon123')
            console.log(token);

            res.status(201).json({
                data: existingUser,
                token: token
            })
        } else {
            res.status(401).json('Invalid email or password')
        }

    } catch (err) {
        res.status(400).json(err)
    }
}
