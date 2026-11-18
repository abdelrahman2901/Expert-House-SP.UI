import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly items = [
    {
      title: 'ERP Implementation Consultancy',
      text: 'Expert guidance across SAP, Oracle, Microsoft, and open-source Odoo — from selection to deployment and optimization.',
    },
    {
      title: 'Project Management',
      text: 'Structured, end-to-end project delivery ensuring timelines, budgets, and business objectives are consistently met.',
    },
    {
      title: 'Business Process Automation',
      text: 'Streamlining operations through intelligent automation — reducing manual effort and eliminating inefficiencies.',
    },
    {
      title: 'Multi-Platform Solutions',
      text: 'Tailored software for mainframes, AS/400, Intel servers, and cloud environments — built for your infrastructure.',
    },
  ];
}
