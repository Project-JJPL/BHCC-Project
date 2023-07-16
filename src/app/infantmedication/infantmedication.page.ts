import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-infantmedication',
  templateUrl: './infantmedication.page.html',
  styleUrls: ['./infantmedication.page.scss'],
})
export class InfantmedicationPage implements OnInit {

  constructor(private router: Router) { }
  cname : string = ''
  age : string = ''
  date : string = ''
  mname : string = ''
  address : string = ''
  mm : string = ''
  yn1 : string = ''
  hepab : string = ''
  yn2 : string = ''
  penta1 : string = ''
  yn3 : string = ''
  penta2 : string = ''
  yn4 : string = ''
  penta3 : string = ''
  yn5 : string = ''
  opv1 : string = ''
  yn6 : string = ''
  opv2 : string = ''
  yn7 : string = ''
  opv3 : string = ''
  yn8 : string = ''
  pcvb1 : string = ''
  yn9 : string = ''
  pcvb2 : string = ''
  yn10 : string = ''
  pcvb3 : string = ''
  yn11 : string = ''
  ipv1 : string = ''
  yn12 : string = ''
  ipv2 : string = ''
  yn13 : string = ''
  mmr1 : string = ''
  yn14 : string = ''
  mmr2 : string = ''
  yn15 : string = ''



  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/itr'])
  }
  goBack2(){
    this.router.navigate(['/itr'])
  }
  submit(){
    console.log(this.cname);
    console.log(this.age);
    console.log(this.date);
    console.log(this.mname);
    console.log(this.address);
    console.log(this.mm);
    console.log(this.yn1);
    console.log(this.hepab);
    console.log(this.yn2);
    console.log(this.penta1);
    console.log(this.yn3);
    console.log(this.penta2);
    console.log(this.yn4);
    console.log(this.penta3);
    console.log(this.yn5);
    console.log(this.opv1);
    console.log(this.yn6);
    console.log(this.opv2);
    console.log(this.yn7);
    console.log(this.opv3);
    console.log(this.yn8);
    console.log(this.pcvb1);
    console.log(this.yn9);
    console.log(this.pcvb2);
    console.log(this.yn10);
    console.log(this.pcvb3);
    console.log(this.yn11);
    console.log(this.ipv1);
    console.log(this.yn12);
    console.log(this.ipv2);
    console.log(this.yn13);
    console.log(this.mmr1);
    console.log(this.yn14);
    console.log(this.mmr2);
    console.log(this.yn15);
  }

}
