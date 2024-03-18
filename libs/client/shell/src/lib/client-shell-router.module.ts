import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '@my-library/auth'
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import("@my-library/auth").then((m) => m.AuthModule)
  }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking'}),
    ],
    exports: [RouterModule]
})
export class ClientShellRouterModule {}