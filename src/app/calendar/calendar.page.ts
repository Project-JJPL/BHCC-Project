import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(private router: Router) { }
  notes : string = ''
  dates : string = ''

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/home'])
  }
  submit(){
    console.log(this.notes);
    console.log(this.dates);
  }

}
