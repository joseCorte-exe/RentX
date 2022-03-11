import { CreateSpecificationService, CreateSpecificationService } from "../modules/cars/sevices/CreateSpecificationService";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";

import { Router } from "express";

const specificationsRoutes = Routes();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    CreateSpecificationService.execute({ name, description });
});
