import { InterpolationConfig } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedMenu = new EventEmitter<string>();

  onSelect(selectItem: string){
    this.selectedMenu.emit(selectItem)
  }
}
