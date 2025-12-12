import './polyfills';

import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app.module';

// Use platformBrowser for AOT compilation
platformBrowser().bootstrapModule(AppModule);
