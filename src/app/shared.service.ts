import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://customerdataservice-env.us-east-1.elasticbeanstalk.com/"

  constructor(private http:HttpClient) { }

  getCustomerPhone(phoneNumber: any): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/contact?phoneNumber=' + phoneNumber)
  }
}
