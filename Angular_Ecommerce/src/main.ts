import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let isProductionEnv = true;
isProductionEnv = isProductionEnv || !/localhost/.test(document.location.host);
isProductionEnv = isProductionEnv || environment.production;
if (isProductionEnv) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
