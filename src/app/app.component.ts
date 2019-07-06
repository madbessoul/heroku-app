import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  message;
  title = 'heroku-app';

  ngOnInit()  {
    this.http.get('https://heroku-rest-0.herokuapp.com/greeting').subscribe(data => {
      console.log(data);
      this.message = data;
    }

    )
  }

}
