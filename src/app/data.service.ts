import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  t: any;

  constructor(private http: HttpClient) { }

  getData(path: any) {
    const data = {
       user: 'ed',
       query: path
    }
    this.t = this.http.post('https://deepgoat.com/echo.php',data);
    return this.t;
  }

}
