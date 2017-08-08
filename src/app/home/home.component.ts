import { Component, OnInit, ElementRef, ViewChild, Inject, AfterViewChecked } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

import { SharedService } from '../shared.service';

// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewChecked{
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  userInput: string;
  history: string[] = [];
  commands: string[] = ["info", "projects", "resume", "linkedin", "bio", "github"];
  @ViewChild('terminal') terminal:ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document,
              private sharedService: SharedService) {
              document.body.style.backgroundColor = "black";
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
    switch(userInput) {
    case "hello":
        message = ["hey, how's it going?"]
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    case "info":
        message = ["linkedin         github        projects"];
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
        message = ["check it out",
        "                             ,----,         ,----,                                          ,---,",
        "       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |",
        "   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :",
        ",---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;",
        ":   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |",
        "|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;",
        "'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '",
        "|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |",
        ":   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;",
        "'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  ",
        "|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   ",
        "'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  ",
        ";   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; ",
        "'---'                                              `----'     '---'                        '---`'",
        " "];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
        break;
    default:
        message = ["Cool. Well that command is not recognized, type info for a list of commands"];
        dto = {input: userInput, output: message};
        this.showResponse(dto);
      }
  }

  showResponse(dto){

    this.history.push(dto.input);
    for (let i of dto.output){
      this.history.push(i);
    }
    this.userInput = "";
  }


  // showKittens() {
    // $('.terminal').append("<div class='kittens'>" +
    //   "<p class='prompt'>	                             ,----,         ,----,                                          ,---,</p>" +
    //   "<p class='prompt'>       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |</p>" +
    //   "<p class='prompt'>   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :</p>" +
    //   "<p class='prompt'>,---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;</p>" +
    //   "<p class='prompt'>:   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |</p>" +
    //   "<p class='prompt'>|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;</p>" +
    //   "<p class='prompt'>'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '</p>" +
    //   "<p class='prompt'>|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |</p>" +
    //   "<p class='prompt'>:   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;</p>" +
    //   "<p class='prompt'>'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  </p>" +
    //   "<p class='prompt'>|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   </p>" +
    //   "<p class='prompt'>'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  </p>" +
    //   "<p class='prompt'>;   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; </p>" +
    //   "<p class='prompt'>'---'                                              `----'     '---'                        '---`'</p>" +
    //   "<p class='prompt'>                                                              </p></div>");
    //
    //
  //   var lines = $('.kittens p');
  //   $.each(lines, function(index, line) {
  //     setTimeout(function() {
  //       $(line).css({
  //         "opacity": 1
  //       });
  //
  //       textEffect($(line))
  //     }, index * 100);
  //   });
  //
  //   $('.new-output').velocity(
  //     'scroll'
  //     ), { duration: 100 }
  //
  //   setTimeout(function() {
  //     var gif;
  //
  //     $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function(result) {
  //       gif = result.data.image_url;
  //       $('.terminal').append('<img class="kitten-gif" src="' + gif + '"">');
  //       resetForm();
  //     });
  //   }, (lines.length * 100) + 1000);
  // }
}
