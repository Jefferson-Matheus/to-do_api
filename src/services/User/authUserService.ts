import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";


class AuthUserService{
    async execute(password:string, email?:string, username?:string){
        if(!email && !username){
          throw new Error('Email or username is required');
        }

        const user = await prismaClient.user.findFirst({
            where:{
              OR:[{ email: email },{ username: username }],
            },
        });

        if(!user){
          throw new Error('User not found');
        }

        const isPasswordCorrect = await compare(password, user.password);

        if(!isPasswordCorrect){
         return { message: 'Invalid password', status: 401, user: null };
        }

        const secret = process.env.JWT_SECRET || 'secret';

         const token = sign(
          {name: user.fullName, email: user.email}
          , secret, 
          {expiresIn: '30d', subject: user.id});

        return { message: 'User found', status: 200, user:{ id: user.id, fullName: user.fullName, email: user.email, username: user.username, image: user.image, token: token } };
  }
}

export {AuthUserService};