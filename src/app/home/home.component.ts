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
              private activatedRoute: ActivatedRoute
            ) {
              const mql: MediaQueryList = window.matchMedia('(min-width: 600px)');
              document.body.style.margin = "0px";
              mql.addListener((mql: MediaQueryList) => {
                mql.matches ?
                this.tablet = false :
                this.tablet = true;
          });
  }


  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event'])
  clickout(event) {
console.log(this.activatedRoute.url.toString());
    this.visible = !this.visible;
        if (this.activatedRoute.url[0] === "projects") {
            this.unregister = this.renderer.listenGlobal('document', 'touchstart', () => {
                this.myFocusTriggeringEventEmitter.emit(false);
                this.unregister();
            });
        } else {
          this.myFocusTriggeringEventEmitter.emit(true);
        }
    // let thing = 1;
    // console.log("thing i'm clicking", this._eref);
    // console.log("event target: ", event);
    // console.log("event.path: ", event.path[0].className);
  //   if (event.path[0].className == "prompt output new-output"){
  //
  //   this.myFocusTriggeringEventEmitter.emit(true);
  // }
    // if (this.clicked){
    // }

    this.clicked = !this.clicked;
    // alert(this.clicked);
    // if ((event.path[0].className) === "ng-tns-c2-0 ng-trigger ng-trigger-slideInOutAnimation"){
    //   // alert("clicked outside the terminal thing, great!");
    //   this.myFocusTriggeringEventEmitter.emit(false);
    // } else {
    //   this.myFocusTriggeringEventEmitter.emit(true);
    // }
    // doSomething();

    // this.clicked = !this.clicked;
  }

  focusFunction(){
    console.log("different console log statement so i know things are saving");
    this.myFocusTriggeringEventEmitter.emit(true);
  //   if (this.clicked && this.tablet){
  //     this.myFocusTriggeringEventEmitter.emit(true)
  // } else if (!this.tablet){
  //   this.myFocusTriggeringEventEmitter.emit(true)
  // }
  //   this.clicked = true;
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
        // this.handleScreenSize();
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
