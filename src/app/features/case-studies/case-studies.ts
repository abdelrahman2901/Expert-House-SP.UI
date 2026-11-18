import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.css',
})
export class CaseStudies {
  protected readonly studies = [
    {
      partner: 'Onfinity',
      title: 'Enterprise ERP rollout for a national manufacturer',
      challenge: 'A mid-sized industrial manufacturer operating across multiple production facilities struggled with fragmented financial, procurement, and inventory data that slowed month-end close and obscured real-time stock positions.',
      solution: "Implemented Onfinity's open-source ERP across finance, procurement, and inventory — unifying all plants onto a single platform with real-time reporting and automated intercompany reconciliation.",
      metrics: [
        { value: '60%', label: 'Faster close' },
        { value: '4', label: 'Plants unified' },
      ],
    },
    {
      partner: 'Bimser',
      title: 'QDMS for ISO quality document management',
      challenge: 'A regulated enterprise needed to modernize paper-based quality, document control, and compliance workflows that made audits slow and document retrieval error-prone.',
      solution: "Deployed Bimser's QDMS platform with AI-powered document classification and automated approval routing — streamlining ISO compliance and centralizing every controlled document.",
      metrics: [
        { value: '80%', label: 'Faster retrieval' },
        { value: 'ISO', label: 'Certified' },
      ],
    },
    {
      partner: 'Folderit',
      title: 'Cloud document management for an SME firm',
      challenge: 'A growing legal firm relied on scattered shared drives and email attachments, making version control difficult and putting client confidentiality at risk.',
      solution: "Rolled out Folderit's cloud EDMS with secure permissions, audit trails, and intuitive search — giving staff instant access to the right documents while keeping sensitive records protected.",
      metrics: [
        { value: '70%', label: 'Less search time' },
        { value: '100%', label: 'Audit trail' },
      ],
    },
    {
      partner: 'OpenKM',
      title: 'Records digitization for a government agency',
      challenge: 'A government agency managed millions of paper records with no unified search or retention policy, delaying public requests and complicating compliance.',
      solution: "Deployed OpenKM's enterprise DMS with records management, advanced search, and compliance workflows — digitizing archives and enforcing retention policies across departments.",
      metrics: [
        { value: '65%', label: 'Faster requests' },
        { value: '3M+', label: 'Records digitized' },
      ],
    },
    {
      partner: 'Ofelia',
      title: 'AI workflow orchestration across teams',
      challenge: 'A multi-team operations group suffered handoff delays and manual task coordination that stretched cycle times and reduced visibility into bottlenecks.',
      solution: "Implemented Ofelia's AI orchestration platform to automate task routing and coordinate cross-team workflows — with full governance, reporting, and control over every process.",
      metrics: [
        { value: '55%', label: 'Cycle-time cut' },
        { value: '24/7', label: 'Automation' },
      ],
    },
  ];
}
