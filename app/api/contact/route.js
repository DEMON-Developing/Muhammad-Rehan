import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Yahan environment variable use karen
            pass: process.env.APP_PASSWORD // Yahan environment variable use karen
        }
    });

    const mailOptions = {
        from: email,
        to: 'rehanchutto68@gamil.com', // Apni email ID
        subject: `New contact form submission from ${name}`,
        html: `
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}