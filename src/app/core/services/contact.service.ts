import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ContactRequest } from '../models/contact-request';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(request: ContactRequest): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiUrl}/api/contact`, request);
  }
}
