import { Component } from '@angular/core';
@Component({
  selector: 'app-menu',
  template: `
  <ul class="vertical menu">
  <li *ngFor="let item of items"><a href="#">{{item.label}}</a></li>
  </ul>`
})
export class Menu {

  items = [{
    label: 'Menu Item',
    href: 'menu'
  }];

}
