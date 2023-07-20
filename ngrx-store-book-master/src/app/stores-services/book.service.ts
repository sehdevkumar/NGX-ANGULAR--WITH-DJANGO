import { Injectable } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { PostBook } from '../typings/api.typings';

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

}
