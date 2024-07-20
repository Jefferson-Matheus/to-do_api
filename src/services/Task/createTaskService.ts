import prismaClient from "../../prisma";
import { CreateTaskInterface } from "../../types/requestTypes";

class CreateTaskService{
    async execute({title,description}:CreateTaskInterface){
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