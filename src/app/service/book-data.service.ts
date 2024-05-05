import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { APIResponse } from '../models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBestsellersOverview(): Observable<APIResponse>{
    return this.http.get<APIResponse>(`${env.NYT_BASE_URL}/overview.json`)
  }
}
