import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent
  }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking'}),
    ],
    exports: [RouterModule]
})
export class ClientShellRouterModule {}