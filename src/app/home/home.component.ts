import { Component, OnInit, ElementRef, ViewChild, Renderer, Inject, AfterViewChecked, EventEmitter, HostListener } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewChecked{
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;



  userInput: string;
  clicked: boolean = true;
  tablet: boolean;
  history: any[] = [];
  pastCommands: string[] = [];
  commands: string[] = ["info", "projects", "resume", "linkedin", "bio", "github"];
  keyUpCount: number = 0;
  openProjects: any;
  private visible: boolean = false;
  private unregister: Function;
  @ViewChild('terminal') terminal:ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document,
              private sharedService: SharedService,
              private router: Router,
              private _eref: ElementRef,
              private renderer: Renderer,
              private activatedRoute: ActivatedRoute,
            ) {
              document.body.style.margin = "0px";
              if (window.screen.width >= 600){
                this.tablet = false;
              } else {
                this.tablet = true;
              }
  }


  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  @HostListener('document:touchstart', ['$event'])
  clickout(event) {
        if (this.router.routerState.snapshot.url === "/projects") {
            this.unregister = this.renderer.listenGlobal('document', 'touchstart', () => {
                this.myFocusTriggeringEventEmitter.emit(false);
                this.unregister();
            });
        } else {
          this.myFocusTriggeringEventEmitter.emit(true);
        }
  }

  focusFunction(){
    if (!this.tablet){
      this.myFocusTriggeringEventEmitter.emit(true)
  } else {
    this.myFocusTriggeringEventEmitter.emit(false)
  }
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
    if (userInput[userInput.length - 1] === " "){
      userInput = userInput.slice(0, -1);
    }
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
    case "'info'":
        message = ["ok, not 'info' literally, info without quotation marks. like, just info"];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    case "project":
        message = ["not project, projects, with an s"];
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
        if (this.tablet){
          message = [];
        } else {
          message = ["check it out. type 'close' to close the project pane"];
        }
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

  handleScreenSize(){
    this.tablet ?
    window.open("https://docs.google.com/document/d/1hOighgLyBw8wOcHxPK4hMqAfHg6z0Pksab1vy_3BhB8/edit?usp=sharing") :
    this.router.navigate(['./projects']);
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
