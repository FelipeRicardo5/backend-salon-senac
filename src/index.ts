import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "../src/routes/routes";
import { AppDataSource } from "./db/data-source";

export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }

    private config(app: Application): void {
        const corsOptions: CorsOptions = {
            origin: ["http://localhost:8081", "http://localhost:5173"],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }
}

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))   
