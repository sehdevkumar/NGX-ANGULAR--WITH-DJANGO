import { Injectable } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { GetAuthor, PostAuthor } from '../typings/api.typings';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpclientService) { }



  onPostAuthor(paylod:PostAuthor) {
     return this.http.request('post','authors/',null,paylod)
  }


  onGetAllAuthors() {
     return this.http.request('get','authors/')
  }

  onDeleteAuthor(param:GetAuthor) {
    let params = new HttpParams()
    params = params.append('id',param?.id+'')
    return this.http.request('delete','authors/',params)
  }

}
