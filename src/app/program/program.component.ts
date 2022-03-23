

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
gymdata:GymInfo[]=[];
  constructor() { }

  
    ngOnInit(): void {
      fetch('https://angular-gym-api.herokuapp.com/program')
    .then(response => response.json())
    .then(json => {
  json.forEach((elmt:any) => {
  let s =new GymInfo();
s.trainingname=elmt.name;
s.description=elmt.description;

this.gymdata.push(s);
    
  });
    
    })
    
  
  }

}
class GymInfo{
trainingname:string="";
description:string="";

}

