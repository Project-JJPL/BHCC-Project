import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-familyplanning',
  templateUrl: './familyplanning.page.html',
  styleUrls: ['./familyplanning.page.scss'],
})
export class FamilyplanningPage implements OnInit {

  constructor(private router: Router) { }
  date : string = ''
  name : string = ''
  age : string = ''
  address: string = ''
  ParaangGinamit: string = ''
  Month: string = ''
  RHM: string = ''

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/itr'])
  }

  goBack2(){
    this.router.navigate(['/itr'])
  }

  submit(){
    console.log(this.date);
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
    console.log(this.ParaangGinamit);
    console.log(this.Month);
    console.log(this.RHM);
    
    
  }

}
