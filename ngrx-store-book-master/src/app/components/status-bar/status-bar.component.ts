import { animate, style, transition, trigger } from '@angular/animations'
import { AfterViewInit, Component } from '@angular/core'

interface StatusBarInterface {
  isExpired: boolean
  message: string
  date: number
  uuid: string
  top?: number
  right?: number
}

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  animations: [
    // Define the animation trigger
    trigger('slideInOut', [
      transition(':leave', [
        style({ transform: 'translateX(-100%)' }), // Initial position for enter
        animate('500ms ease-in', style({ transform: 'translateX(0)' })) // Final position for enter
      ]),
      transition(':enter', [
        style({ transform: 'translateX(0)' }), // Initial position for leave
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' })) // Final position for leave
      ])
    ])
  ]
})
export class StatusBarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }

  statusMessageList: StatusBarInterface[] = []

  public onShowStatus(message: string) {
    const date = Date.now() + 30000
    console.log(date, Date.now())

    const statusMessage: StatusBarInterface = {
      isExpired: false,
      message: message,
      date: date,
      uuid: date.toString(),
      top: this.statusMessageList?.length * 60,
      right: 0,
    }

    this.statusMessageList.push(statusMessage)
    // this.onCheckStatusBarExpired()
  }

  private onCheckStatusBarExpired() {
    const timerRef = setInterval(() => {
      if (
        this.statusMessageList.length === 0 ||
        this.statusMessageList === undefined
      ) {
        clearInterval(timerRef)
        return
      }

      this.statusMessageList?.forEach((msg) => {
        if (msg?.date < Date.now()) {
          msg.isExpired = true
        }
      })
      this.onCleanExpiredMessages()
    })
  }

  private onCleanExpiredMessages() {
    this.statusMessageList = this.statusMessageList?.filter(
      (msg) => msg?.isExpired === false,
    )
    this.statusMessageList?.forEach((msg , index) => {
       msg.top = index * 60
    })
  }
}
