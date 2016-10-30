import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
  private strHeading:string;
  private strDesc:string;
  private strBtnText:string;
  private urlBtn:string;

  constructor() {
    this.strHeading = "Hello World";
    this.strDesc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    this.strBtnText = "Learn More";
    this.urlBtn = '/about';
  }
}
