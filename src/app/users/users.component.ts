import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) { }

  users: Observable<any>;
  apiUrl = 'https://jsonplaceholder.typicode.com/users';


  ngOnInit() {
    this.users = this.http.get<any>(this.apiUrl)
    // .pipe(
    //   map(res => {
    //     const result = [];
    //     res.forEach(element => {
    //       result.push(element.name);
    //     });
    //     return result;
    //   })
    // );
  }

}
