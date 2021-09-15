import { Component, OnInit } from '@angular/core';

//component decorator
@Component({
  //configuration/metadata for componet (Selector, template & styles)
  //template can be either a link or actual html, needs to be there always
  selector: 'app-server',
  templateUrl: './server.component.html',//relative path
  styleUrls: ['./server.component.css']//relative path
})

//typescript class
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
