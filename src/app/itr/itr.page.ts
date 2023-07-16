import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-itr',
  templateUrl: './itr.page.html',
  styleUrls: ['./itr.page.scss'],
})
export class ITRPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['/home'])
  }
  goForwardim(){
    this.router.navigate(['/infantmedication'])
  }
  goForwardmm(){
    this.router.navigate(['/mothermedication'])
  }
  goForwardfp(){
    this.router.navigate(['/familyplanning'])
  }
  goForwardam(){
    this.router.navigate(['/adultmedication'])
  }

}
