import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styles: ['input.ng-invalid { border-left:5px solid red } input.ng-valid{border-left:5px solid green}' ]
})
export class TdfComponent implements OnInit {

  constructor() { }
  onSubmit(value:any)
  {
  console.log(value)

  }
  ngOnInit() {
  }

}
