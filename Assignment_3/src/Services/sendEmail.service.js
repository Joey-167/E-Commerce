import nodemailer from 'nodemailer';
export const sendEmailService = async ({
    to,
    subject = "",
    textMessage = "",
    htmlMessage = "",
    attachments = [],
} = {}) => {
    const transporter = nodemailer.createTransport({

        secure: false,
        auth: {
        },
    });

    const info = await transporter.sendMail({
        to: to ? to : '',
        subject,
        text: textMessage,
        html: htmlMessage,
        attachments,
    });

    return info;
};
