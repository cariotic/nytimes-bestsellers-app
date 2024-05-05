import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { APIResponseFullList, APIResponseOverview } from '../models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBestsellersOverview(): Observable<APIResponseOverview>{
    return this.http.get<APIResponseOverview>(`${env.NYT_BASE_URL}/overview.json`)
  }

  getFullList(listName?: string): Observable<APIResponseFullList> {
    return this.http.get<APIResponseFullList>(`${env.NYT_BASE_URL}/current/${listName}.json`);
  }
}
