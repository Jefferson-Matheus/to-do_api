import {UserInterface} from '../../types/requestTypes'

import prismaClient from '../../prisma'

class CreateUserService{
    async execute(user:UserInterface){
        const userData = await prismaClient.user.create({
            data:user,
            select:{
                id:true,
                fullName:true,
                email:true,
                username:true,
                image:true,
                createdAt:true,
                updatedAt:true
            }
        })
        return userData
    }
}

export {CreateUserService};