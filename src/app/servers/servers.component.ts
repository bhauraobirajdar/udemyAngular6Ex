import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
disabledServer = true;
typedVal = 'test server';

servers = ['test 1',"test 2"];

createServerStatus = "Server not created";
  constructor() {
    setTimeout(()=>{
      this.disabledServer = false;
    },2000)
   }

  ngOnInit() {
  }
  status:boolean = false;
  serverId : number = 10;
  serverStatus : string = "Offline"

  getStatus(){
    return "Offlineeee";
  }

  onServerCreate(){
    this.status=true;
    this.servers.push(this.typedVal);
    this.createServerStatus = "Now server created, server name is "+this.typedVal;
  }

  onTypeText(event : any){
   
    this.typedVal = event.target.value;
  }

}
