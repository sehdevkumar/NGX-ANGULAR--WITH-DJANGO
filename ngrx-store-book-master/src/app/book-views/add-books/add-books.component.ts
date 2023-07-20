import { selectGetAuhtors } from './../../stores/author/author.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllBooks } from 'src/app/stores/book/book.actions';
import { selectGetBooks } from 'src/app/stores/book/book.selectors';
import { GetAuthor } from 'src/app/typings/api.typings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {

  addFormGp:FormGroup;
  authors$: Observable<GetAuthor[]>

  constructor(private store: Store , private fb:FormBuilder) {
      this.addFormGp = this.fb.group(
        {
          title:['' , Validators.required],
          description: ['',Validators.required],
          id:['',Validators.required]
        }
      )
  }



  ngOnInit(): void {
      this.store.select(selectGetBooks).subscribe(res=> {
      })

      this.authors$ = this.store.select(selectGetAuhtors);
  }

}
