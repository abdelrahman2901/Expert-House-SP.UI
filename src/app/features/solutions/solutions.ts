import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  protected readonly items = [
    {
      title: 'Enterprise ERP',
      powered: 'Powered by Onfinity',
      text: 'End-to-end enterprise resource planning — financials, supply chain, procurement, and HR — delivered on a flexible, scalable open-source platform tailored to each organization.',
      points: ['Full-cycle financials', 'Supply chain & procurement', 'Scalable architecture'],
    },
    {
      title: 'AI Process Automation',
      powered: 'Powered by Bimser',
      text: 'Low-code / no-code automation of quality, compliance, and business processes through QDMS, Synergy, eBA, Beam, and Ensemble — accelerating digital transformation with AI at the core.',
      points: ['QDMS · Synergy · eBA', 'Low-code / no-code', 'AI-driven quality management'],
    },
    {
      title: 'Document Management',
      powered: 'Powered by Folderit & OpenKM',
      text: "Secure, intuitive document and records management spanning SMEs to enterprise and government — from Folderit's user-friendly cloud EDMS to OpenKM's compliance-grade enterprise platform.",
      points: ['Cloud & on-premises EDMS', 'Records & compliance', 'SME to government scale'],
    },
    {
      title: 'AI Workflow Orchestration',
      powered: 'Powered by Ofelia',
      text: 'AI orchestration that automates workflows and coordinates tasks across teams — reducing cycle times by 40–70% while keeping full governance and control.',
      points: ['AI workflow automation', 'Cross-team orchestration', 'Governed & scalable'],
    },
  ];
}
