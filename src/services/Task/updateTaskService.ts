import prismaClient from "../../prisma";
import { TaskInterface } from "../../types/requestTypes";

class UpdateTaskService {
 async execute(task:Partial<TaskInterface>, id:string) {
    const updatedTask = await prismaClient.task.update({
        where: {id},
        data: task,
    });
    return updatedTask;
 }
}

export {UpdateTaskService};