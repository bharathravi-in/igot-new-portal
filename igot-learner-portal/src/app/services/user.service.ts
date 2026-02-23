import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { UserReadApiResponse, UserResponse } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);

  private readonly API_URL = '/apis/proxies/v8/api/user/v2/read';

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'accept': 'application/json',
      'hostpath': 'portal.uat.karmayogibharat.net',
      'locale': 'en',
      'org': 'dopt',
      'rootorg': 'igot',
    });
  }

  fetchCurrentUser(): Observable<UserResponse | null> {
    return this.http
      .get<UserReadApiResponse>(this.API_URL, { headers: this.headers })
      .pipe(
        map(res => {
          if (res?.responseCode === 'OK' && res?.result?.response) {
            return res.result.response;
          }
          return null;
        }),
        catchError(err => {
          console.error('[UserService] Failed to fetch user:', err);
          return of(null);
        })
      );
  }
}
