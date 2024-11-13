import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Add this import
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [FormsModule, CommonModule]

})

export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  markAsCompleted(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.taskService.saveTasks(this.tasks);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.taskService.saveTasks(this.tasks);
  }
}
