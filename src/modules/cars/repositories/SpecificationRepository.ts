import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

import { Specification } from "../model/Specification";

class SpecificationRepository implements ISpecificationsRepository {
    private specification: Specification[];

    constructor() {
        this.specification = [];
    }

    findByName(name: string): Specification {
        const specification = this.specification.find(
            (specification) => specification.name === name
        );

        return specification;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specification.push(specification);
    }
}

export { SpecificationRepository };
