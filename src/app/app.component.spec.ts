import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Menu } from './app.menu';
import {Header} from "./app.header";

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent,Menu,Header]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

});
