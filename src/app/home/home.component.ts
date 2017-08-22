import { Component, OnInit, ElementRef, ViewChild, Inject, AfterViewChecked } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewChecked{
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  userInput: string;
  history: any[] = [];
  pastCommands: string[] = [];
  commands: string[] = ["info", "projects", "resume", "linkedin", "bio", "github"];
  keyUpCount: number = 0;
  @ViewChild('terminal') terminal:ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document,
              private sharedService: SharedService,
              private router: Router) {
              document.body.style.margin = "0px";
  }

  ngOnInit() {
        this.scrollToBottom();
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
  }

  onSubmit(e: NgForm) {
    let userInput = e.toString();
    this.doAllTheThings(userInput);
  }

  doAllTheThings(userInput) {
    let message = [""];
    let dto = {input: "", output: [""]};
    this.keyUpCount = 0;
    switch(userInput.toLowerCase()) {
    case "hello":
        message = ["hey, how's it going?"]
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    case "info":
        message = ["linkedin         github        projects        resume"];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    case "github":
        message = ["there you go"];
        window.open("https://github.com/alancarltaylor");
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    case "linkedin":
        message = ["there you go"];
        window.open("https://www.linkedin.com/in/alan-taylor-84870386/");
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    case "projects":
        message = ["check it out. type 'close' to close the project pane"];
        // ,
        // "                             ,----,         ,----,                                          ,---,",
        // "       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |",
        // "   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :",
        // ",---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;",
        // ":   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |",
        // "|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;",
        // "'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '",
        // "|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |",
        // ":   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;",
        // "'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  ",
        // "|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   ",
        // "'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  ",
        // ";   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; ",
        // "'---'                                              `----'     '---'                        '---`'",
        // " "];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        this.router.navigate(['./projects']);
        break;
    case "close":
        message = [];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        this.router.navigate(['./']);
        break;
    case "resume":
        message = [];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        window.open("https://docs.google.com/document/d/1hOighgLyBw8wOcHxPK4hMqAfHg6z0Pksab1vy_3BhB8/edit?usp=sharing");
        this.router.navigate(['./']);
        break;
    case "clear":
        message = [];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        this.router.navigate(['./']);
        break;
    default:
        message = ["Cool. Well that command is not recognized, type info for a list of commands"];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
      }
  }

  showResponse(dto){
    this.history.push(dto.input);
    if (dto.input === 'clear'){
      this.history = [];
    }
    this.pastCommands.unshift(dto.input);
    for (let i of dto.output){
      this.history.push(i);
    }
    this.userInput = "";
  }

  usePastCommands(e){
    let index = 0;
    if (e.keyCode === 8){
      this.keyUpCount = 0;
    } else if (e.keyCode === 38){
      if (this.keyUpCount < (this.pastCommands.length)){
        this.keyUpCount++;
        this.userInput = this.pastCommands[this.keyUpCount - 1];
      } else {
        this.keyUpCount = 1;
        this.userInput = this.pastCommands[this.keyUpCount - 1];
      }
    } else if ((e.keyCode === 40) && (this.keyUpCount > 1)){
      this.keyUpCount--;
      this.userInput = this.pastCommands[this.keyUpCount - 1];
    }
  }
}
