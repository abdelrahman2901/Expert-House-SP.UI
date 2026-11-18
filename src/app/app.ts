import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { applySeo } from './core/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  constructor() {
    applySeo();
  }
}
