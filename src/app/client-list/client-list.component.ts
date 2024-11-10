import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from '../shared/client.model';
import { ClientListComponent_service } from './client-list.services';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy{
  client:Client[];
  private igchanged:Subscription;
 constructor(private SService:ClientListComponent_service){

 }
 ngOnInit(){
  this.client=this.SService.getClient();
  this.igchanged=this.SService.ClientChanged.subscribe(
    (newclient:Client[])=>{
      this.client=newclient;
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
