import { Request, Response } from "express";
import { CreateProductUseCase } from "./create-product.usecase";

class CreateProductController{

constructor(){

}

    async handle(req:Request,res:Response){

        const useCase = new CreateProductUseCase()

       try {
        const result = await useCase.execute(req.body)
        return res.json(result)
       } catch (err) {
            return res.status(400).json(err)
       }
    }
}

export {CreateProductController}