import { Router } from "express";
import { CreateProductController } from "../modules/create-product/create-product.controller";



const router = Router()



router.post("/products",(req,res) =>{
    new CreateProductController().handle(req,res)
})


export {router}