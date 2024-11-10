import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild,  } from '@angular/core';
import { Meetings } from 'src/app/shared/meeting.model';
import { MeetingsListComponent_service } from '../meeting-list/meeting-list.services';
@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription
  editMode=false;
  editedItemIndex:number;
  editedItem:Meetings;
constructor(private SService:MeetingsListComponent_service){

}
AddMeeting(form:NgForm){
  const value=form.value;
  // const ingName=this.InameInput.nativeElement.value;
  // const ingAmount=this.IAmount.nativeElement.value;
  const newmeeting=new Meetings(value.MeetingTopic,value.NumberofPeople,value.StartTime);
  if(this.editMode){
    this.SService.updateMeetings(this.editedItemIndex,newmeeting)
  }else{
  this.SService.AddMeetings(newmeeting);}
  this.editMode=false;
  form.reset();
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
onDelete(){
  this.SService.deleteMeetings(this.editedItemIndex);
  this.onClear();

}
ngOnInit(){
  this.subscription=this.SService.startedEditing.subscribe((index:number)=>{
    this.editMode=true;
    this.editedItemIndex=index;
    this.editedItem=this.SService.getMeeting(index);
    this.slForm.setValue({
      MeetingTopic:this.editedItem.MeetingTopic,
      NumberofPeople:this.editedItem.NumberofPeople,
      StartTime:this.editedItem.StartTime
    })
  });
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
