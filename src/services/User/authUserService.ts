import { compare } from "bcryptjs";
import prismaClient from "../../prisma";


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

        return { message: 'User found', status: 200, user:{ id: user.id, fullName: user.fullName, email: user.email, username: user.username, image: user.image } };
  }
}

export {AuthUserService};