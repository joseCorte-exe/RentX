import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlredyExist = this.categoriesRepository.findByName(name);

        if (categoryAlredyExist) {
            throw new Error("Category alredy exist!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
