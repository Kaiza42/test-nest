import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {}
