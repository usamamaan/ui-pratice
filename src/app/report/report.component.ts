import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  cols: any[] = [];

  _selectedColumns: any[] = [];
  complaints: any[] = [
    {
      complainId: 1,
      complainType: 'Billing Issue',
      complainUserName: 'John Doe',
      dateOfComplain: '2024-07-01',
    },
    {
      complainId: 2,
      complainType: 'Service Disruption',
      complainUserName: 'Jane Smith',
      dateOfComplain: '2024-07-02',
    },
    {
      complainId: 3,
      complainType: 'Wrong Delivery',
      complainUserName: 'Michael Johnson',
      dateOfComplain: '2024-07-03',
    },
    {
      complainId: 4,
      complainType: 'Poor Support',
      complainUserName: 'Emily Davis',
      dateOfComplain: '2024-07-04',
    },
    {
      complainId: 5,
      complainType: 'Product Defect',
      complainUserName: 'David Wilson',
      dateOfComplain: '2024-07-05',
    },
    {
      complainId: 6,
      complainType: 'Billing Issue',
      complainUserName: 'Sarah Brown',
      dateOfComplain: '2024-07-06',
    },
    {
      complainId: 7,
      complainType: 'Service Disruption',
      complainUserName: 'Chris Taylor',
      dateOfComplain: '2024-07-07',
    },
    {
      complainId: 8,
      complainType: 'Poor Support',
      complainUserName: 'Laura Martinez',
      dateOfComplain: '2024-07-08',
    },
    {
      complainId: 9,
      complainType: 'Wrong Delivery',
      complainUserName: 'James Anderson',
      dateOfComplain: '2024-07-09',
    },
    {
      complainId: 10,
      complainType: 'Product Defect',
      complainUserName: 'Olivia Thomas',
      dateOfComplain: '2024-07-10',
    },
    {
      complainId: 11,
      complainType: 'Billing Issue',
      complainUserName: 'Robert Jackson',
      dateOfComplain: '2024-07-11',
    },
    {
      complainId: 12,
      complainType: 'Service Disruption',
      complainUserName: 'Sophia White',
      dateOfComplain: '2024-07-12',
    },
    {
      complainId: 13,
      complainType: 'Wrong Delivery',
      complainUserName: 'William Harris',
      dateOfComplain: '2024-07-13',
    },
    {
      complainId: 14,
      complainType: 'Poor Support',
      complainUserName: 'Mia Martin',
      dateOfComplain: '2024-07-14',
    },
    {
      complainId: 15,
      complainType: 'Product Defect',
      complainUserName: 'Henry Lee',
      dateOfComplain: '2024-07-15',
    },
    {
      complainId: 16,
      complainType: 'Billing Issue',
      complainUserName: 'Amelia Walker',
      dateOfComplain: '2024-07-16',
    },
    {
      complainId: 17,
      complainType: 'Service Disruption',
      complainUserName: 'Jack Hall',
      dateOfComplain: '2024-07-17',
    },
    {
      complainId: 18,
      complainType: 'Poor Support',
      complainUserName: 'Isabella Allen',
      dateOfComplain: '2024-07-18',
    },
    {
      complainId: 19,
      complainType: 'Wrong Delivery',
      complainUserName: 'Ethan Young',
      dateOfComplain: '2024-07-19',
    },
    {
      complainId: 20,
      complainType: 'Product Defect',
      complainUserName: 'Mason Hernandez',
      dateOfComplain: '2024-07-20',
    },
    {
      complainId: 21,
      complainType: 'Billing Issue',
      complainUserName: 'Charlotte King',
      dateOfComplain: '2024-07-21',
    },
    {
      complainId: 22,
      complainType: 'Service Disruption',
      complainUserName: 'Lucas Wright',
      dateOfComplain: '2024-07-22',
    },
    {
      complainId: 23,
      complainType: 'Wrong Delivery',
      complainUserName: 'Liam Scott',
      dateOfComplain: '2024-07-23',
    },
    {
      complainId: 24,
      complainType: 'Poor Support',
      complainUserName: 'Ella Green',
      dateOfComplain: '2024-07-24',
    },
    {
      complainId: 25,
      complainType: 'Product Defect',
      complainUserName: 'Noah Adams',
      dateOfComplain: '2024-07-25',
    },
    {
      complainId: 26,
      complainType: 'Billing Issue',
      complainUserName: 'Chloe Baker',
      dateOfComplain: '2024-07-26',
    },
    {
      complainId: 27,
      complainType: 'Service Disruption',
      complainUserName: 'Benjamin Clark',
      dateOfComplain: '2024-07-27',
    },
    {
      complainId: 28,
      complainType: 'Wrong Delivery',
      complainUserName: 'Emma Robinson',
      dateOfComplain: '2024-07-28',
    },
    {
      complainId: 29,
      complainType: 'Poor Support',
      complainUserName: 'Ava Rodriguez',
      dateOfComplain: '2024-07-29',
    },
    {
      complainId: 30,
      complainType: 'Product Defect',
      complainUserName: 'Oliver Lewis',
      dateOfComplain: '2024-07-30',
    },
    {
      complainId: 31,
      complainType: 'Billing Issue',
      complainUserName: 'Harper Walker',
      dateOfComplain: '2024-07-31',
    },
    {
      complainId: 32,
      complainType: 'Service Disruption',
      complainUserName: 'Ella Thompson',
      dateOfComplain: '2024-08-01',
    },
    {
      complainId: 33,
      complainType: 'Poor Support',
      complainUserName: 'Avery Young',
      dateOfComplain: '2024-08-02',
    },
    {
      complainId: 34,
      complainType: 'Wrong Delivery',
      complainUserName: 'Scarlett Martinez',
      dateOfComplain: '2024-08-03',
    },
    {
      complainId: 35,
      complainType: 'Product Defect',
      complainUserName: 'Levi Lopez',
      dateOfComplain: '2024-08-04',
    },
    {
      complainId: 36,
      complainType: 'Billing Issue',
      complainUserName: 'Zoe White',
      dateOfComplain: '2024-08-05',
    },
    {
      complainId: 37,
      complainType: 'Service Disruption',
      complainUserName: 'Gabriel Perez',
      dateOfComplain: '2024-08-06',
    },
    {
      complainId: 38,
      complainType: 'Wrong Delivery',
      complainUserName: 'Emily Hill',
      dateOfComplain: '2024-08-07',
    },
    {
      complainId: 39,
      complainType: 'Poor Support',
      complainUserName: 'Hazel Rivera',
      dateOfComplain: '2024-08-08',
    },
    {
      complainId: 40,
      complainType: 'Product Defect',
      complainUserName: 'Leo Carter',
      dateOfComplain: '2024-08-09',
    },
  ];

  constructor() {}
  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'complainId', header: 'Complain ID' },
      { field: 'complainType', header: 'complainType' },
      { field: 'complainUserName', header: 'complainUserName' },
      { field: 'dateOfComplain', header: 'dateOfComplain' },
    ];
    this._selectedColumns = this.cols;
  }
}
