import { AfterViewInit, Component } from '@angular/core';

interface StatusBarInterface {
   isExpired:boolean;
   message:string;
   date:number;
   uuid:string;
}


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements AfterViewInit{


  ngAfterViewInit(): void {
      this.onShowStatus('hello1')
      this.onShowStatus('hello2')
      // this.onShowStatus('hello3')
      // this.onShowStatus('hello4')
      // this.onShowStatus('hello5')
      // this.onShowStatus('hello6')
      // this.onShowStatus('hello7')
      // this.onShowStatus('hello8')
      // this.onShowStatus('hello9')

  }

  statusMessageList: StatusBarInterface[] = []

  public onShowStatus(message:string) {
    const date = new Date().getTime() + 100
    const statusMessage:StatusBarInterface = {
      isExpired: false,
      message: message,
      date,
      uuid:date.toString()
    }
    this.statusMessageList.push(statusMessage);
    this.onCheckStatusBarExpired()
   }
        

   private onCheckStatusBarExpired() {
     this.statusMessageList.forEach(status=> {
       const currentTimer = new Date()?.getTime()
       const isExpired = currentTimer > status?.date;
       // console.log(isExpired)
       status.isExpired = isExpired
       this.onCleanExpiredMessages();
    })
    if(this.statusMessageList?.length > 0) {
     this.onCheckStatusBarExpired()
    }else {
      return;
    }

  }

  private onCleanExpiredMessages() {
    this.statusMessageList.map(st=> !st.isExpired)
  }

}
