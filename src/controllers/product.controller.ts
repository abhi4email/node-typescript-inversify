import { Request, Response } from "express";

export class ProductController{

    get(req:Request, res:Response): any{
        return res.json({hi:"Hi"});
    }
    
}