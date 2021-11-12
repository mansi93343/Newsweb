import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }


  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=f38cad08a89d42ae9c504ced24eac39b";
  techApiUrl="https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=f38cad08a89d42ae9c504ced24eac39b";

  topHeading():Observable<any>
  {
     return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

}
