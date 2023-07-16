import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-mothermedication',
  templateUrl: './mothermedication.page.html',
  styleUrls: ['./mothermedication.page.scss'],
})
export class MothermedicationPage implements OnInit {
  name : string = ''
  age : string = ''
  address : string = ''
  date : string = ''
  time : string = ''
  follow : string = ''
  roli : string = ''
  dmni : string = ''
  date1 : string = ''
  oras : string = ''
  vitamina : string = ''
  fs : string = ''
  date3 : string = ''
  intake : string = ''
  
  



  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/itr'])
  }
  goBack2(){
    this.router.navigate(['/itr'])
  }

  submit(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
    console.log(this.date);
    console.log(this.time);
    console.log(this.follow);
    console.log(this.roli);
    console.log(this.dmni);
    console.log(this.date1);
    console.log(this.oras);
    console.log(this.vitamina);
    console.log(this.fs);
    console.log(this.date3);
    console.log(this.intake);

    
    
  }

  

}
