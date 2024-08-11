import { Request, Response } from "express";

import { DeleteTaskService } from "../../services";

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const  deleteTaskService  = new DeleteTaskService();

    const message = await deleteTaskService.execute(id);

    res.status(200).json({message});
  }
}

export {DeleteTaskController};