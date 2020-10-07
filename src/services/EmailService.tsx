interface IMailTo{
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    content: string;
    attachment?: string[];
}

class EmailService {
    sendMail(to: IMailTo, message: IMailMessage) {
        console.log(`Email Sent to ${to.name} : ${to.email}`);
    }
}

export default EmailService