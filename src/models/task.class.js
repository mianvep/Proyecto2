import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    description = '';
    complete = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.complete = completed;
        this.level = level;
    };
}