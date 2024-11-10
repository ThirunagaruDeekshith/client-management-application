import { Subject } from "rxjs";
import { Meetings } from "../shared/meeting.model";

export class MeetingsListComponent_service{
    MeetingsChanged=new Subject<Meetings[]>();
    startedEditing=new Subject<number>();
    private Meetings:Meetings[]=[
        new Meetings('Project setup',7,'2024-10-27T10:06'),
        new Meetings('Stand Up Call',7,'2024-10-27T13:06')
       ];

    getMeetings(){
        return this.Meetings.slice();
    }
    getMeeting(index:number){
        return this.Meetings[index];
    }
    AddMeetings(Meetings:Meetings){
        this.Meetings.push(Meetings);
        this.MeetingsChanged.next(this.Meetings.slice());
    }
    addMeetings(meeting:Meetings[]){
        this.Meetings.push(...meeting);
        this.MeetingsChanged.next(this.Meetings.slice());
    }
    updateMeetings(index:number,newmeeting:Meetings){
        this.Meetings[index]=newmeeting;
        this.MeetingsChanged.next(this.Meetings.slice());
    }
    deleteMeetings(index:number){
        this.Meetings.splice(index,1);
        this.MeetingsChanged.next(this.Meetings.slice());
    }
}