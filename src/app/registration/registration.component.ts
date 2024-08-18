import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  ComplainType: any[] = ['Service Problem', 'connectivity problem ', 'other'];
  selectedComplain: string = '';
  constructor() {}

  ngOnInit(): void {}
}
