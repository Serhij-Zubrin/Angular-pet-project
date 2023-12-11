import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[]
})
export class AppComponent {
  selectedMenu = 'recipe'

  handlerChangeMenu(menuItem: string){
    this.selectedMenu = menuItem;
  }
}
