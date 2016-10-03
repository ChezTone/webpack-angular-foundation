import { Component,AfterViewInit,ElementRef } from '@angular/core';

let $ = require('../../node_modules/jquery/dist/jquery.js');
let foundation = require('../../node_modules/foundation-sites/dist/foundation.js');
$().foundation = foundation;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        $(this.el.nativeElement.ownerDocument).foundation();
    }
}
