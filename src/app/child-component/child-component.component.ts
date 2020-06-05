import { EventEmitter, Component, Output, Input, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {

  @Input() inputParam;
  @Output() outputParam = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.outputParam.emit('outdata');
  }

}
