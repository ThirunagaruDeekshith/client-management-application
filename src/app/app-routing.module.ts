import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { HeaderComponent } from './Header/header.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
const routes: Routes = [
  {path: '',redirectTo:'/client_list',pathMatch:'full'},
  // {path: 'home', component:HeaderComponent},
  {path: 'create_client', component:CreateClientComponent},
  {path: 'create_meeting', component:CreateMeetingComponent},
  {path: 'client_list', component:ClientListComponent},
  {path: 'meeting_list', component:MeetingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
