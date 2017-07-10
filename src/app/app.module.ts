import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MaestroComponent} from './components/maestro/maestro.component';
import {InicioComponent} from './components/inicio/inicio.component';
import { AppheaderComponent } from './components/maestro/appheader/appheader.component';
import { AppfooterComponent } from './components/maestro/appfooter/appfooter.component';
import { AppmenuComponent } from './components/maestro/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/maestro/appsettings/appsettings.component';
import { NavmenuComponent } from './components/generales/navmenu/navmenu.component';
import { CompunoComponent } from './component/compuno/compuno.component';
import { CompdosComponent } from './component/compdos/compdos.component';
import { ComptresComponent } from './component/comptres/comptres.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        MaestroComponent,
        InicioComponent,
        AppheaderComponent,
        AppfooterComponent,
        AppmenuComponent,
        AppsettingsComponent,
        NavmenuComponent,
        CompunoComponent,
        CompdosComponent,
        ComptresComponent,
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
