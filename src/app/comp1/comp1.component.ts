import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  tempInput = "";
  info = "";
  info_two="";

  onDisplay(temp :  HTMLInputElement)
  {
    this.info = temp.value

  }

  onDisplayTwo()
  {
    this.info_two = this.tempInput

  }


}
