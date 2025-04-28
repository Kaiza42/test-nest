import { Injectable } from '@nestjs/common';

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}
@Injectable()// permet de dire que tasksService peut etre injecter dans d'autre classe
export class TasksService {
    private tasks: any[] = [];

   
    findAll() {
        return this.tasks;
    }

    // ajouter une tache
    createTask(title: string, description: string) {
        const task = {
            id: Date.now(),  // genere l'id unique 
            title,
            description,
            status: 'en cours', // statut par défaut
        };
        this.tasks.push(task);
        return task;
    }
    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: number, title: string, description: string, status: string) {
        const task = this.tasks.find(task => task.id === id);

        if (!task) {
            return null;
        }

        task.title = title;
        task.description = description;
        task.status = status;

    };
}