import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component.ts';
import { Menu } from "./app.menu";
import { Header } from "./app.header";
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, Menu, Header],
    bootstrap: [AppComponent]
})
export class AppModule {
}
