import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import './app/styles/styles.scss'

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
