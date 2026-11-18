import { Component, signal } from '@angular/core';

import { Reveal } from '../../core/directives/reveal';
import { About } from '../about/about';
import { CaseStudies } from '../case-studies/case-studies';
import { Contact } from '../contact/contact';
import { Expertise } from '../expertise/expertise';
import { Linkedin } from '../linkedin/linkedin';
import { Partners } from '../partners/partners';
import { Services } from '../services/services';
import { Solutions } from '../solutions/solutions';

@Component({
  selector: 'app-home',
  imports: [Reveal, About, Services, Solutions, Partners, Expertise, CaseStudies, Linkedin, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly menuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
