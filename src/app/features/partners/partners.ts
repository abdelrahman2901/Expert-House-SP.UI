import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  protected readonly items = [
    {
      label: 'formerly Vienna Advantage',
      name: 'Onfinity',
      text: "A robust open-source enterprise-grade ERP solution. We leverage Onfinity to deliver flexible, scalable enterprise resource planning tailored to each organization's requirements.",
      points: ['Open-source enterprise ERP', 'Flexible & customizable', 'Scalable architecture'],
    },
    {
      label: 'AI-powered process automation',
      name: 'Bimser',
      text: 'Pioneers in AI-powered, low-code/no-code business process automation platforms — including QDMS, Synergy, eBA, Beam, and Ensemble for quality document management and process automation.',
      points: ['QDMS · Synergy · eBA', 'Beam · Ensemble platforms', 'AI-powered low-code/no-code'],
    },
    {
      label: 'SME document management',
      name: 'Folderit',
      text: 'The world’s most user-friendly document management system, available as cloud or on-premises. We deliver Folderit to small and medium enterprises that need secure, intuitive document control without the overhead of enterprise platforms.',
      points: ['Cloud & on-premises EDMS', 'Secure & intuitive', 'Built for SMEs'],
    },
    {
      label: 'Enterprise & government DMS',
      name: 'OpenKM',
      text: 'A robust document management system for medium and large enterprises and government organizations — integrating records management, advanced search, and compliance workflows across both open-source and enterprise editions.',
      points: ['Enterprise & government', 'Records & compliance', 'Open-source + enterprise'],
    },
    {
      label: 'AI workflow orchestration',
      name: 'Ofelia',
      text: 'An AI orchestration platform for enterprise operations — automating workflows, coordinating tasks across teams, and reducing cycle times by 40–70% with full governance and control.',
      points: ['AI workflow automation', 'Cross-team orchestration', 'Governed & scalable'],
    },
  ];
}
