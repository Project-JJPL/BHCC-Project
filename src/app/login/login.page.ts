import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;

  constructor(private router: Router) {
    // Set the default username and password
    this.username = '';
    this.password = '';
  }

  login() {
    // Check if the entered username and password match the default values
    if (this.username === 'BHW' && this.password === '123456') {
      alert('Login successful!');
      // Redirect the user to the desired page
      // Replace '/dash' with the actual route of the destination page
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}
