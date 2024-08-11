import prismaClient from "../../prisma";

class DeleteTaskService {
  async execute(id: string) {
    const exists = await prismaClient.task.findFirst({
      where: {
        id: id
      }
    });

    if (!exists) {
        throw new Error('Task not found');
    }

    await prismaClient.task.delete({
      where: {
        id: id
      }
    });
    return {message: 'Task deleted'};
  }
}

export {DeleteTaskService};