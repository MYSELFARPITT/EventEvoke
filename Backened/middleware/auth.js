const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.isAuthenticated = async (req, res, next) => {
    try {
        const {token} = req.cookies;

        if(!token) {
            return res.status(400).json({
                success: false,
                message: 'Login first to access the resource'
            });
        }

        const decodeData = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decodeData.id);

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}