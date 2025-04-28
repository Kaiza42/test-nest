import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    getALLTasks() {
        return this.tasksService.findAll();
    }

    @Post()
    createTasks(
        @Body('title') title: string,
        @Body('description') description: string,
    ) {
        return this.tasksService.createTask(title, description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(+id);
        return { message: `Tâche ${id} suprimée.` };
    }


    @Patch(':id')
    updateTask(
        @Param('id') id: string,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: string,
    ) {
        return this.tasksService.updateTask(+id, title, description, status);
    }
}