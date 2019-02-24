import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {
 name="abhishek"
 employee={"name":"ravi","address":"mumbai","salary":"34567"}
  
  constructor() { }

  ngOnInit() {
  }

}
