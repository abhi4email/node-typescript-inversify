import 'reflect-metadata';
import { container } from '../container';
import { Controller } from "../base/Controller";
import TYPES from "../types";
import * as express from "express";
import { ProductController } from "./product.controller";
let router = express.Router();
router.get('/', new ProductController().get)

  export default router