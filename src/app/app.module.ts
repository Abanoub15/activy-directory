import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';

import { MsalModule, MsalService } from '@azure/msal-angular/public-api';
import { MSAL_INSTANCE } from '@azure/msal-angular/constants';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'b5e20e1a-1bcb-4ee2-92c0-01451e08ee5d',
      redirectUri: 'http://localhost:4200',
    },
  });
}

@NgModule({
  imports: [BrowserModule, FormsModule, MsalModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
})
export class AppModule {}
