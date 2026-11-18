import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the company name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('EXPERT HOUSE SP');
  });
});
