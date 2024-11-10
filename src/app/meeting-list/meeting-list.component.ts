import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meetings } from '../shared/meeting.model';
import { MeetingsListComponent_service } from './meeting-list.services';
@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit, OnDestroy{
  meeting: Meetings[];
  private igchanged:Subscription;
 constructor(private SService:MeetingsListComponent_service){

 }
 ngOnInit(){
  this.meeting=this.SService.getMeetings();
  this.igchanged=this.SService.MeetingsChanged.subscribe(
    (newmeeting:Meetings[])=>{
      this.meeting=newmeeting;
    }
  )
 } 
 onEditItem(index:number){
    this.SService.startedEditing.next(index);
 }
 ngOnDestroy(): void {
   this.igchanged.unsubscribe();
 }
}
