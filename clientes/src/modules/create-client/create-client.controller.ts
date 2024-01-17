import { Response,Request } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

 class CreateClientController{
    constructor(){

    }

    async handle(req:Request,res:Response){
            const useCase = new CreateClientUseCase()
        try {
    
            const result = await useCase.execute(req.body)
            return res.status(201).json(result)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}

export {CreateClientController}