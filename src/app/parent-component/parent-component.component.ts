import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  displayOutputParam(val) {
    console.log(val)
  }

}
