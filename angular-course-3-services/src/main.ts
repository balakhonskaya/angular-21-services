import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, { providers: 
  [
    //provideZoneChangeDetection(),
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
  ] 
})
  .catch(err => console.log(err));
