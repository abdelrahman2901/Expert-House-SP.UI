import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly points = [
    'Over two decades of ERP implementation expertise',
    'Tailored solutions for mainframes, AS/400, Intel & cloud',
    'AI-powered quality document management systems',
    'Trusted strategic technology partnerships',
  ];
}
