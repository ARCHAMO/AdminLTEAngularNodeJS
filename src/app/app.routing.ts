import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes propios de la aplicacion
import { LoginComponent } from './components/login/login.component';
import { MaestroComponent } from './components/maestro/maestro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'maestro', component: MaestroComponent, data: {breadcrumb: "Home"},
        children: [
            { path: 'inicio', component: InicioComponent, data: {breadcrumb: "Inicio"}},
        ]
    },
    { path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);