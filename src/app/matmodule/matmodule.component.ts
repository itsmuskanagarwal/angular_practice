import { Component } from '@angular/core';

@Component({
  selector: 'app-matmodule',
  templateUrl: './matmodule.component.html',
  styleUrls: ['./matmodule.component.css']
})
export class MatmoduleComponent {

  entervalue ="";
  display ="";
  onAdd()
  {
    this.display=this.entervalue
  }

}
