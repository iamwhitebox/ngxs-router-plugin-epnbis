import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    SharedModule,
    AccountModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
