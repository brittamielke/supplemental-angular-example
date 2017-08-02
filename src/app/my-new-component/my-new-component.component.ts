import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  thing = "lamp"

  @Input() potato;
  @Output() spud = new EventEmitter();
  
  constructor() { }

  clickedTheButton(){
    this.spud.emit(this.thing)
  }

  ngOnInit() {
  }

}
