import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild,  } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { ClientListComponent_service } from '../client-list/client-list.services';
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit,OnDestroy{
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription
  editMode=false;
  editedItemIndex:number;
  editedItem:Client;
constructor(private SService:ClientListComponent_service){

}
AddClient(form:NgForm){
  const value=form.value;
  // const ingName=this.InameInput.nativeElement.value;
  // const ingAmount=this.IAmount.nativeElement.value;
  const newIngredient=new Client(value.name,value.serial_number,value.email);
  if(this.editMode){
    this.SService.updateclient(this.editedItemIndex,newIngredient)
  }else{
  this.SService.Addclient(newIngredient);}
  this.editMode=false;
  form.reset();
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
onDelete(){
  this.SService.deleteclient(this.editedItemIndex);
  this.onClear();

}
ngOnInit(){
  this.subscription=this.SService.startedEditing.subscribe((index:number)=>{
    this.editMode=true;
    this.editedItemIndex=index;
    this.editedItem=this.SService.getclient(index);
    this.slForm.setValue({
      name:this.editedItem.name,
      email:this.editedItem.email,
      serial_number:this.editedItem.serial_number
    })
  });
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
