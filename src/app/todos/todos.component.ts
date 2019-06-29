import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {refCount, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todos: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.todos = this.http.get<any>(this.todosUrl);
  }

}
