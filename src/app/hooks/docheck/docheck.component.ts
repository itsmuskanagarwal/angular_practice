import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-docheck',
  template: './docheck.component.html',
  styleUrls: ['./docheck.component.css']
})
export class DocheckComponent implements DoCheck{

  lifecycleTicks: number = 0;
  oldTheData: string ="";
  data: string[] = ['initial'];
  temp = this.data[this.data.length - 1];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // Done to see working of docheck
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }

}
