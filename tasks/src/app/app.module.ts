import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './Task-1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Task-1/success-alert/success-alert.component';
import { TaskComponent } from './Task-2/task/task.component';
import { Task3Component } from './Task-3/task3/task3.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TaskComponent,
    Task3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
