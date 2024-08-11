import { Request, Response } from "express";

import { DetailTaskService } from "../../services";

class DetailTaskController{
    async handle(req:Request,res:Response){
        const id = req.query.id as string;

        if(!id){
            throw new Error('Missing id');
        }

        const detailTaskService = new DetailTaskService();
        const task = await detailTaskService.execute(id);
        return res.json(task);
    }
}

export {DetailTaskController};