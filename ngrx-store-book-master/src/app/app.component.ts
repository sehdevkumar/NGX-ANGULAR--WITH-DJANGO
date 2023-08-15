import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { getAllBooks } from './stores/book/book.actions'
import { tabSelector } from './stores/tabs/tab.selectors'
import { Observable } from 'rxjs'
import { TabsInterface } from './typings/api.typings'
import { SubSink } from 'subsink'
import { StatusBarComponent } from './components/status-bar/status-bar.component'
import { SingletonService } from './services/singleton.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(StatusBarComponent) statusBarComp: StatusBarComponent

  subsSink: SubSink = new SubSink()

  selectedTab: TabsInterface

  get getSelectedTab() {
    return this.selectedTab
  }

  constructor(private store: Store, private ss: SingletonService) {}

  ngAfterViewInit(): void {
    this.initSharedComps()
  }

  initSharedComps() {
    this.ss.statusBarComponent = this.statusBarComp
  }

  ngOnInit(): void {
    const s1 = this.store.select(tabSelector).subscribe((res) => {
      this.selectedTab = (res as any)?.tab
    })

    this.onGetAllBooksData()
    this.subsSink.add(s1)
  }

  onGetAllBooksData() {
    this.store.dispatch(getAllBooks())
  }

  ngOnDestroy(): void {
    this.subsSink.unsubscribe()
  }
}
