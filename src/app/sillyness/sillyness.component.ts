import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sillyness',
  templateUrl: './sillyness.component.html',
  styleUrls: ['./sillyness.component.scss']
})
export class SillynessComponent implements OnInit {
  message: string[] = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  onClick(){
    window.open("https://vidiot.herokuapp.com");
  }

}
