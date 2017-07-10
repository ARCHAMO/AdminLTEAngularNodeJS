import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes propios de la aplicacion
import { LoginComponent } from './components/login/login.component';
import { MaestroComponent } from './components/maestro/maestro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompunoComponent } from './component/compuno/compuno.component';
import { CompdosComponent } from './component/compdos/compdos.component';
import { ComptresComponent } from './component/comptres/comptres.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'maestro', component: MaestroComponent, data: {breadcrumb: "Home"},
        children: [
            { path: 'inicio', component: InicioComponent, data: {breadcrumb: "Inicio"}},
            { path: 'uno', component: CompunoComponent, data: {breadcrumb: "Uno"}},
            { path: 'dos', component: CompdosComponent, data: {breadcrumb: "Dos"}},
            { path: 'tres', component: ComptresComponent, data: {breadcrumb: "Tres"}},
        ]
    },
    { path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);