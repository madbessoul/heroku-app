import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


export interface Greeting {
  id: number;
  content: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  message: string;
  title = 'heroku-app';

  ngOnInit()  {
    this.http.get<Greeting>('https://heroku-rest-0.herokuapp.com/greeting?name=Mad').subscribe(data => {
      this.message = data.content
    }
    )
  }

}
