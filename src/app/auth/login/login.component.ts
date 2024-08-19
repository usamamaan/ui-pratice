import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  hide: boolean = true;
  constructor() {}
  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
  }
  ngOnInit(): void {}
}
