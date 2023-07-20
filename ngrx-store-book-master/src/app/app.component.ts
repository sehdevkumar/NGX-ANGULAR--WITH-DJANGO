import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllBooks } from './stores/book/book.actions';
import { tabSelector } from './stores/tabs/tab.selectors';
import { Observable } from 'rxjs';
import { TabsInterface } from './typings/api.typings';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy{

  subsSink:SubSink = new SubSink()

  selectedTab:TabsInterface

  get getSelectedTab() {
     return this.selectedTab
  }

   constructor(private store:Store) {}



  ngOnInit(): void {

    const s1 =   this.store.select(tabSelector)
    .subscribe(res=> {
      this.selectedTab = (res as any)?.tab
      console.log(this.selectedTab)
    })

  this.onGetAllBooksData()
  this.subsSink.add(s1);
  }

  onGetAllBooksData() {
     this.store.dispatch(getAllBooks())
  }


  ngOnDestroy(): void {
      this.subsSink.unsubscribe()
  }
}


