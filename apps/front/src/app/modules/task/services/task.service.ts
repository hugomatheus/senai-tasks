import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '@nt-al/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<ITask[] | undefined> {
    return this.http.get<ITask[]>('/api/tasks').toPromise();
  }
}
