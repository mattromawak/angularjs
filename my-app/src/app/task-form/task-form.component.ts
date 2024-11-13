import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  newTask = { title: '', completed: false };

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.newTask.title.trim()) {
      const tasks = this.taskService.getTasks();
      tasks.push({ ...this.newTask });
      this.taskService.saveTasks(tasks);
      this.newTask.title = ''; // Reset form
    }
  }
}
