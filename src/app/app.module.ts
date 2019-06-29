import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { LoaderComponent } from './loader/loader/loader.component';
import {LoaderService} from './loader/loader.service';
import {LoaderInterceptor} from './loader/loader.interceptor';
import {MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      UsersComponent,
      TodosComponent,
      LoaderComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      MatProgressSpinnerModule
   ],
   providers: [
     LoaderService,
     { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
