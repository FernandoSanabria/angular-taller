import { Component, OnInit } from '@angular/core';
import { Girl } from '../girl';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  girl: Girl = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
