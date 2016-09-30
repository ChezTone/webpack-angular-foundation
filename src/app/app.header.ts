import {Component} from '@angular/core';
@Component({
  selector: 'app-header',
  template: `
  <div class="title-bar">
  <div class="title-bar-left">
  <button class="menu-icon" type="button" data-open="offCanvasLeft"></button>
  <span class="title-bar-title">Foundation Template</span>
  </div>
  </div>
  `

})
export class Header {
}
