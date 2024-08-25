import {UserInterface} from '../../types/requestTypes'

import prismaClient from '../../prisma'

import {hash} from 'bcryptjs'
class CreateUserService{
    async execute(user:UserInterface){
        const hashedPassword = await hash(user.password, 8);

        const userData = await prismaClient.user.create({
            data:{
                fullName:user.fullName,
                email:user.email,
                username:user.username,
                password:hashedPassword,
                image:user.image,
            },
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