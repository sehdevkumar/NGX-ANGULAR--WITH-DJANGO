import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

 interface BodyPayload {
  [key: string]: number | string | Array<string> | Array<number> | any;
}


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

 private baseUrl = 'http://172.16.120.62:8000/api'
  constructor(private http: HttpClient) { }


  request(method?:'GET' | 'POST' | 'DELETE' | 'PUT' | any,url?: string | any,param?:HttpParams | null | undefined | any,body?:BodyPayload,headers?:HttpHeaders):Observable<HttpResponse<any | unknown>> {



   const processedUrl = `${this.baseUrl}/${url}`

    let httpReq = this.http.request(
      new HttpRequest(method, processedUrl, body, {
        reportProgress: true,
        params: param,
        headers: headers,
        responseType: 'json',
        withCredentials: false,
      })
    );


     return httpReq as any as Observable<HttpResponse<any | unknown>>


  }



}
