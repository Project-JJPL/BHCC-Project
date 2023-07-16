import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-adultmedication',
  templateUrl: './adultmedication.page.html',
  styleUrls: ['./adultmedication.page.scss'],
})
export class AdultmedicationPage implements OnInit {

  constructor(private router: Router) { }
  facility : string = ''
  lastname : string = ''
  firstname : string = ''
  mname : string = ''
  sex : string = ''
  date : string = ''
  birth : string = ''
  address : string = ''
  hypertensive : string = ''
  diabetis : string = ''
  cholesterol : string = ''
  heart : string = ''
  others : string = ''

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/itr'])
  }
  goBack2(){
    this.router.navigate(['/itr'])
  }

  submit(){
    console.log(this.facility);
    console.log(this.lastname);
    console.log(this.firstname);
    console.log(this.mname);
    console.log(this.sex);
    console.log(this.date);
    console.log(this.birth);
    console.log(this.address);
    console.log(this.hypertensive);
    console.log(this.diabetis);
    console.log(this.cholesterol);
    console.log(this.heart);
    console.log(this.others);

  }


}
