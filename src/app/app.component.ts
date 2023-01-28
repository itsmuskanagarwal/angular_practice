import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular practice';

  arbitraryData: string = 'Changes initial';
  arbitraryDataInit: string = 'Init initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'Changes final';
      this.arbitraryDataInit = 'Init final';
      
    }, 5000);


  }
}
