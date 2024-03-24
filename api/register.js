import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, studentName, phone, email, service, focus, notes } = req.body;

        try {
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
                from: `"Averydavis.me" <${process.env.SMTP_USER}>`,
                to: "danielmyers300@gmail.com",
                subject: 'Request for Tutoring and Invoice',
                html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Student's Name:</strong> ${studentName}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Service Requested:</strong> ${service}</p>
                    <p><strong>Focus Area:</strong> ${focus}</p>
                    <p><strong>Notes:</strong> ${notes}</p>
                `,
            });

            console.log('Message sent: %s', info.messageId);

            res.redirect('/email_success');
        } catch (error) {
            console.error('Error sending email:', error);
            res.redirect('/email_failure');
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
