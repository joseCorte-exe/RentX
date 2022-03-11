import express from "express";

import { categoriesRoutes } from "./routes/catetgories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3030, () => console.log("Server running in localhost:3030"));
