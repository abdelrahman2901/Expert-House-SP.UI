import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactService } from '../../core/services/contact.service';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly contactService = inject(ContactService);

  protected readonly status = signal<FormStatus>('idle');
  protected readonly notice = signal('');
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(100)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email, Validators.maxLength(254)] }),
    company: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(120)] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(4000)] }),
    website: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(200)] }),
  });

  protected submit(): void {
    if (this.status() === 'loading') {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('error');
      this.notice.set('Please complete the required fields.');
      return;
    }

    this.status.set('loading');
    this.notice.set('');
    this.contactService.send(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.status.set('success');
        this.notice.set(response.message);
        this.form.reset();
      },
      error: (error: HttpErrorResponse) => {
        const message = error.error?.message;
        this.status.set('error');
        this.notice.set(
          typeof message === 'string' && message.length > 0
            ? message
            : 'Unable to send your message. Please try again.',
        );
      },
    });
  }
}
