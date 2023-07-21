import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuthors } from 'src/app/stores/author/author.actions';
import { tabAction } from 'src/app/stores/tabs/tab.actions';
import { tabState } from 'src/app/stores/tabs/tab.reducers';
import { TabsInterface } from 'src/app/typings/api.typings';

@Component({
  selector: 'app-tab-navbar',
  templateUrl: './tab-navbar.component.html',
  styleUrls: ['./tab-navbar.component.scss']
})
export class TabNavbarComponent {

  constructor(private store:Store){
      this.store.dispatch(getAuthors())

  }

  public   tabs:TabsInterface[] = [
    {
      tabName:'Add Author',
      tabIndex:1,
      tabClass:'active',
      activate:true
    },
    {
      tabName:'Add Book',
      tabIndex:2,
      tabClass:'active',
      activate:false
    }
   ]


  onSwitchTabs(tab:TabsInterface) {
      this.tabs.forEach(t=> t.activate = false)
      tab.activate  = true
      this.store.dispatch(tabAction({tab:{...tab}}))
      this.store.dispatch(getAuthors())
  }

}
