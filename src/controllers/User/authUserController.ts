import {Request,Response} from 'express';
import { AuthUserService } from '../../services';

class AuthUserController{
    async handle(req:Request, res:Response){
      const {password, email, username} = req.body;

      console.log(password, email, username);
      
      const authUserService = new AuthUserService();

      const user = await authUserService.execute(password, email, username);

      return res.status(user.status).json(user.user);
      
    }
}

export {AuthUserController};