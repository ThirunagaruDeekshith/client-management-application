import { Subject } from "rxjs";
import { Client } from "../shared/client.model";

export class ClientListComponent_service{
    ClientChanged=new Subject<Client[]>();
    startedEditing=new Subject<number>();
    private Client:Client[]=[
        new Client('harsha',21345,'harsha@tcs.com'),
        new Client('sandeep',21346,'sandeep@tcs.com')
       ];

    getClient(){
        return this.Client.slice();
    }
    getclient(index:number){
        return this.Client[index];
    }
    Addclient(client:Client){
        this.Client.push(client);
        this.ClientChanged.next(this.Client.slice());
    }
    addClient(ingredient:Client[]){
        this.Client.push(...ingredient);
        this.ClientChanged.next(this.Client.slice());
    }
    updateclient(index:number,newIngredienT:Client){
        this.Client[index]=newIngredienT;
        this.ClientChanged.next(this.Client.slice());
    }
    deleteclient(index:number){
        this.Client.splice(index,1);
        this.ClientChanged.next(this.Client.slice());
    }
}