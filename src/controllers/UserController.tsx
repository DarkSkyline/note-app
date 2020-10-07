import { Request, Response } from 'express';
import EmailService from '../services/EmailService';


const users = [
    {
        name: 'Filipe',
        email: 'filipesferreira94@gmail.com'
    }
]

export default {
    async index(request: Request, response: Response) {
        return response.json(users);
    },

    async create(request: Request, response: Response){
        const emailService = new EmailService();


        emailService.sendMail(
            { name: 'Filipe Ferriera', email: 'filipesferreira94@gmail.com'},
            { subject: 'Bem vindo', content: 'Isto é o conteudo'}
        );

        return response.send();
    }
};