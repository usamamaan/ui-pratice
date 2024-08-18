import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  ComplainType: any[] = [
    { name: 'Select Complain type', value: '' },
    { name: 'Service Problem', value: 'serviceCode' },
    { name: 'connectivity problem', value: 'connectivityProblem' },
    { name: 'other', value: 'other' },
  ];
  selectedComplain: any = this.ComplainType[0];
  autoResize: boolean = true;
  value:any
  constructor() {}

  ngOnInit(): void {}
}
