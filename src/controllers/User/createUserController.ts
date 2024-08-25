import { Request, Response } from "express"

import {CreateUserService} from '../../services'

class CreateUserController{
    async handle(req:Request,res:Response){
        const user = req.body

        let image = '';

        if(req.file){
            image = req.file.filename;
        }

        const createUserService = new CreateUserService()
        
        const userData = await createUserService.execute({...user,image});

        res.status(201).json(userData)
    }
}

export {CreateUserController};