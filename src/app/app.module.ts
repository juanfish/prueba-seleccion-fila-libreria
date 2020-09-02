import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SysutilModule } from '@laranda/lib-sysutil';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    SysutilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
