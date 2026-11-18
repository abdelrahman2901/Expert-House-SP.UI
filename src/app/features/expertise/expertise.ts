import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.html',
  styleUrl: './expertise.css',
})
export class Expertise {
  protected readonly platforms = [
    { name: 'SAP', detail: 'Enterprise ERP' },
    { name: 'Oracle', detail: 'Enterprise ERP' },
    { name: 'Microsoft', detail: 'Dynamics & cloud' },
    { name: 'Odoo', detail: 'Open-source ERP' },
  ];
}
