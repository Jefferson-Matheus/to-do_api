import prismaClient from "../../prisma";

class DetailTaskService{
    async execute(id:string){
        const task = await prismaClient.task.findFirst({
            where:{
                id
            }
        })
        return task;
    }
}

export {DetailTaskService};