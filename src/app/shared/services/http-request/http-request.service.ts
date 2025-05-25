import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpRequestService {
  private httpClient = inject(HttpClient);
  private url = 'https://d2sfhirfmqk3ax.cloudfront.net/v1/confirmar';

  public get() {
    return this.httpClient.get(this.url, {
      headers: {
        'x-authorization': 'testeExperimento',
      },
    });
  }
}
