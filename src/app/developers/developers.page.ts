import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBackd(){
    this.router.navigate(['/home'])
  }

}
