import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {ToastrModule} from 'ngx-toastr';
import {BreadcrumbsModule} from "ng2-breadcrumbs";
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MaestroComponent} from './components/maestro/maestro.component';
import {InicioComponent} from './components/inicio/inicio.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        MaestroComponent,
        InicioComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
