import { Injectable } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { GetBook, PostBook } from '../typings/api.typings';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpclientService) {



  }


  onAddBook(book:PostBook) {
     return this.httpClient.request('post' , 'books/',null,book)
  }

  onGetAllBooks() {
     return this.httpClient.request('get','books/')
  }

  onDeleteBook(book:GetBook) {
     let params = new HttpParams()
     params = params.append('id',book?.id)
     return this.httpClient.request('delete','books/',params)
  }

}
