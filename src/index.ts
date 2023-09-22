import 'reflect-metadata';
import express from 'express';
import  router from "./controllers/routes"
import { appConfig } from "config"
const server = express();
server.use(router);
server.listen(appConfig.getConfigProvider().server.port!);

console.log('Server started on port  ' + appConfig.getConfigProvider().server.port! + '  )');