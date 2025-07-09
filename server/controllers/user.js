import {User} from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register=async(req,res)=>{

    export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "User already exists",
            });

            const hashPassword = await bcrypt.hash(password, 10);  // Hash the password

            user = {
                name,
                email,
                password: hashPassword // Hash the password 
            };

            const otp = Math.floor(100000 + Math.random()); // Generate a 6-digit OTP
            const activationToken = jwt.sign({ 
                user,
                otp
            }, process.env.Activation_Secret,
            {
            expiresIn: '5m',
         } // Set the token to expire in 15 minutes
        );

        const data={
            user,
            otp,
        };
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
};