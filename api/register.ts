require('dotenv').config();

const nodemailer = require('nodemailer');

export default async function handler(req:any, res:any) {
    if (req.method === 'POST') {
        const { name, studentName, phone, email, service, frequency } = req.body;

        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Your Name" <${process.env.SMTP_USER}>`,
            to: 'contact@danmyers.net',
            subject: 'Form Submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Student's Name:</strong> ${studentName}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Requested:</strong> ${service}</p>
                <p><strong>Frequency:</strong> ${frequency}</p>
            `,
        });

        console.log('Message sent: %s', info.messageId);

        res.status(200).json({ message: 'Email sent successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
