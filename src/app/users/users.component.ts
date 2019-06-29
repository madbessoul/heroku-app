import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {refCount, shareReplay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) { }

  users: Observable<any>;

  usersUrl = 'https://jsonplaceholder.typicode.com/users';


  ngOnInit() {
    this.users = this.http.get<any>(this.usersUrl);
  }
}
