import prismaClient from "../../prisma";
import { TaskInterface } from "../../types/requestTypes";

class CreateTaskService{
    async execute({title,description,userId}:TaskInterface){
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
                description,
                userId
            }
        })
        return task;
    };

}

export {CreateTaskService};