import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortalClientShellComponent } from "./portal-client-shell/portal-client-shell.component";

const routes: Routes = [
    {
        path: '',
        component: PortalClientShellComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking'})
    ],
    exports: [
        RouterModule
    ]
})
export class PortalClientShellRouterModule {}