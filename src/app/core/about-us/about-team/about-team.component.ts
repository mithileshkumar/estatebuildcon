import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent implements OnInit {
    public  team=[
      {name:"S N Agarwal",image:'',designation:'Founder'},
      {name:"Sumeet Kumar Agarwal",image:'',designation:'Director'},
      {name:"Naveen Kumar Agarwal",image:'',designation:'Director'},
      {name:"Amit Kumar Agarwal",image:'',designation:'Director'},
      {name:"Shubham Agarwal",image:'',designation:'CMO'}
    ]
  constructor() { }

  ngOnInit() {
  }

}
