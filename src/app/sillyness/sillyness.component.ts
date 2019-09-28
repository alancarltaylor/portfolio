import { Component, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';

// import slide in/out animation
import { slideInOutAnimation } from '../_animations/index';

@Component({
  selector: 'app-sillyness',
  templateUrl: './sillyness.component.html',
  styleUrls: ['./sillyness.component.scss'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],

  // attach the slide in/out animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': 'app-home' }
})
export class SillynessComponent implements OnInit {
  message: string[] = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  onClick(e){
    window.open(e.srcElement.parentNode.id);
  }

}
