import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectGetAuhtors } from 'src/app/stores/author/author.selectors';
import { deleteBook } from 'src/app/stores/book/book.actions';
import { selectGetBooks } from 'src/app/stores/book/book.selectors';
import { GetAuthor, GetBook } from 'src/app/typings/api.typings';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {

  bookList$:Observable<GetBook[]>
  authorList:GetAuthor[]
  constructor(private store:Store) {}

  ngOnInit(): void {
    this.bookList$ = this.store.select(selectGetBooks);
    this.store.select(selectGetAuhtors).subscribe(res=> {
       this.authorList = res
       console.log(this.authorList)
    })
  }


  onDeleteAuthor(event,book:GetBook) {
     event?.preventDefault();

     this.store.dispatch(deleteBook({params:book}))
  }


  getBookAuthorName(id:number):string {
      const foundAuth =  this.authorList.find(a=> +a.id === id);
      return foundAuth.first_name + ' '+ foundAuth.last_name
  }

}
