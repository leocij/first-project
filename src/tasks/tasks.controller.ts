import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('/api/v1/tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    // nest
    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId): Promise<Task> {
        return this.taskService.getTask(taskId);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(task);
    }

    @Put(':id')
    updateTask(@Param('id') id, @Body() task: CreateTaskDto): string {
        console.log(id);
        console.log(task);
        return 'Updating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting task number: ${ id }`;
    }
}
