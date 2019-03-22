import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
disabledServer = true;
typedVal = 'test server';

createServerStatus = "Server not created";
  constructor() {
    setTimeout(()=>{
      this.disabledServer = false;
    },2000)
   }

  ngOnInit() {
  }

  serverId : number = 10;
  serverStatus : string = "Offline"

  getStatus(){
    return "Offlineeee";
  }

  onServerCreate(){
    this.createServerStatus = "Now server created, server name is "+this.typedVal;
  }

  onTypeText(event : any){
   
    this.typedVal = event.target.value;
  }

}
