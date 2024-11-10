import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
@Output() featureSelected=new EventEmitter<string>();
  OnSelect(feature:string){
   this.featureSelected.emit(feature);
  }

  userSub:Subscription;
  isAuthenticated:boolean=false;

  ngOnInit(): void {
    
    };
  }
  

