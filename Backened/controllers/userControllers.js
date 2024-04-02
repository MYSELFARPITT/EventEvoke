const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'Missing fields'
            });
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                message: 'User alreasy exists'
            });
        }

        const newUser = await User.create({name, email, password});

        res.status(201).json({
            success: true,
            message: "User registered",
            newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Missing fields'
            });
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User does not exist. First register"
            });
        }

        const token = await user.getJWTToken();

        res.status(200).cookie('token', token).json({
            success: true,
            message: 'LoggedIn successful'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

exports.userProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

exports.logoutUser = async (req, res) => {
    try {
        const { token } = req.cookies;
        if(!token){
            return res.status(400).json({
                success: false,
                message: 'Login first to logout'
            });
        }
        res.clearCookie('token');

        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}