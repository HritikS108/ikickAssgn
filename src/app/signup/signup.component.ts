import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  user: any = {};

  onSubmit() {
    // Implement form validation and submission logic here
    if (this.user.password !== this.user.confirmPassword) {
      // Handle password mismatch
    } else {
      // Submit the form data to your backend or perform further processing
    }
  }
}
