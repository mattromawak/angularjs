import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';  // Import TaskFormComponent
import { TaskListComponent } from './task-list/task-list.component';  // Import TaskListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskFormComponent, TaskListComponent],  // Add components to imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to 'styleUrls' (plural)
})
export class AppComponent {
  title = 'my-app';
}
