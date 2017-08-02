import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  thing = "lamp"

  @Input() potato;
  
  constructor() { }

  ngOnInit() {
  }

}
