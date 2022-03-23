import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablegym',
  templateUrl: './tablegym.component.html',
  styleUrls: ['./tablegym.component.css']
})
export class TablegymComponent implements OnInit {
gymdata2:GymInfo2[]=[];
  constructor() { }

  ngOnInit(): void {
    fetch('https://angular-gym-api.herokuapp.com/program')
  .then(response => response.json())
  .then(json => {
json.forEach((elmt:any) => {
let s =new GymInfo2();
s.trainingname=elmt.name;
s.timing=elmt.time;
s.coach=elmt.coach;
this.gymdata2.push(s);
  
});
  
  })
  

}

}
class GymInfo2{
trainingname:string="";
timing:string="";
coach:string="";
}