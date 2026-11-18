import { Component } from '@angular/core';

import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  template: '<app-home />',
})
export class App {}
