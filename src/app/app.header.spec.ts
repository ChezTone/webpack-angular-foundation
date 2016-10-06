import { TestBed } from '@angular/core/testing';
import {Header} from "./app.header";

describe('Header', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [Header]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(Header);
        expect(fixture.componentInstance instanceof Header).toBe(true, 'should create Header');
    });

});
