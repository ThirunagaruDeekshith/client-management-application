import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from './client-list/client-list.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ClientListComponent_service } from './client-list/client-list.services';
import { ClientListEditComponent } from './client-list/client-list-edit/client-list-edit.component';
import { MeetingsListComponent_service } from './meeting-list/meeting-list.services';
import { MeetingListEditComponent } from './meeting-list/meeting-list-edit/meeting-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientListComponent,
    MeetingListComponent,
    CreateClientComponent,
    CreateMeetingComponent,
    ClientListEditComponent,
    MeetingListEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ,ReactiveFormsModule
   
],
  providers: [ClientListComponent_service,MeetingsListComponent_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
