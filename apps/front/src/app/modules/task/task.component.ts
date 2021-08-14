import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { ITask } from '@nt-al/api-interfaces';

@Component({
  selector: 'nt-al-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] | undefined;

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getAll().then((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

}
