import { TestBed } from '@angular/core/testing';
import {Menu} from "./app.menu";

describe('Header', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [Menu]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(Menu);
        expect(fixture.componentInstance instanceof Menu).toBe(true, 'should create Menu');
    });

});
