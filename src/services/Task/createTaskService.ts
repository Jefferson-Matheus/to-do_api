import prismaClient from "../../prisma";
import { CreateTaskInterface } from "../../types/requestTypes";

class CreateTaskService{
    async execute({title,description}:CreateTaskInterface){
        const taskAlreadyExists = await prismaClient.task.findFirst({
            where:{
                title:title
            }
        })

        if(taskAlreadyExists){
            throw new Error('Task already exists');
        }    
      
        const task = await prismaClient.task.create({
            data:{
                title,
                description
            }
        })
        return task;
    };

}

export {CreateTaskService};