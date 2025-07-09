import {createTransport} from 'nodemailer'

const sendMail = async (to, subject, text) => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port:465,
        auth: {
            user: process.env.Gmail,
            pass: process.env.Password,
        },
    });
}