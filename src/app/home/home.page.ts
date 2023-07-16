import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/login'])
  }
  goForwarditr() {
    this.router.navigate(['/itr']);
  }
  goForward() {
    this.router.navigate(['/patient-info']);
  }
  goForwardcalendar() {
    this.router.navigate(['/calendar']);
  }
  goForwardsettings() {
    this.router.navigate(['/settings']);
  }
  goForwardabts() {
    this.router.navigate(['/patient-info']);
  }

}
