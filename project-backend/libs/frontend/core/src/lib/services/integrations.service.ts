import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Integration } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class IntegrationsService {
  apiUrl = 'http://localhost:3333/api/integrations';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Integration[]> {
    return this.http.get(this.apiUrl) as Observable<Integration[]>;
  }
}
