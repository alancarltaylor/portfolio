import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // userInput: string;
  inputReady: boolean;
  @ViewChild('terminal') terminal:ElementRef;

  constructor() {
    // document.body.style.backgroundColor = "black";
  }

  ngOnInit() {
    // this.inputReady = true;
    // let input = $('.404-input');
  }

  // onSubmit(e: NgForm) {
  //   // if (this.userInput === 'kittens') {
  //     // this.showKittens();
  //   } else {
  //     // this.resetForm();
  //   }
  // };

  // resetForm() {
  //   let message = "Sorry that command is not recognized."
  //   this.userInput = '';
  //
  //   this.terminal.nativeElement.insertAdjacentHTML('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
  //
  //   $('.new-output').velocity(
  //     'scroll'
  //     ), { duration: 100 }
  // }

  // showKittens() {
  //   $('.terminal').append("<div class='kittens'>" +
  //     "<p class='prompt'>	                             ,----,         ,----,                                          ,---,</p>" +
  //     "<p class='prompt'>       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |</p>" +
  //     "<p class='prompt'>   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :</p>" +
  //     "<p class='prompt'>,---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;</p>" +
  //     "<p class='prompt'>:   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |</p>" +
  //     "<p class='prompt'>|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;</p>" +
  //     "<p class='prompt'>'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '</p>" +
  //     "<p class='prompt'>|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |</p>" +
  //     "<p class='prompt'>:   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;</p>" +
  //     "<p class='prompt'>'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  </p>" +
  //     "<p class='prompt'>|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   </p>" +
  //     "<p class='prompt'>'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  </p>" +
  //     "<p class='prompt'>;   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; </p>" +
  //     "<p class='prompt'>'---'                                              `----'     '---'                        '---`'</p>" +
  //     "<p class='prompt'>                                                              </p></div>");
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

  // textEffect(line) {
  //   var alpha = [';', '.', ',', ':', ';', '~', '`'];
  //   var animationSpeed = 10;
  //   var index = 0;
  //   var string = line.text();
  //   var splitString = string.split("");
  //   var copyString = splitString.slice(0);
  //
  //   var emptyString = copyString.map(function(el) {
  //     return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
  //   })
  //
  //   emptyString = shuffle(emptyString);
  //
  //   foreach(copyString, function(i, el) {
  //     var newChar = emptyString[i];
  //     toUnderscore(copyString, line, newChar);
  //
  //     setTimeout(function() {
  //       fromUnderscore(copyString, splitString, newChar, line);
  //     }, i * animationSpeed);
  //   })
  // }

  toUnderscore(copyString, line, newChar) {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
  }

  fromUnderscore(copyString, splitString, newChar, line) {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
  }


  // shuffle(o) {
  //   for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  //   return o;
  // };

}
