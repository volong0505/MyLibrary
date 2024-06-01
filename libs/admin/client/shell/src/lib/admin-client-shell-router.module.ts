import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminClientShellComponent } from './admin-client-shell/admin-client-shell.component';
const routes: Routes = [
  {
    path: '',
    component: AdminClientShellComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'photo-gallery',
        pathMatch: 'full'
      },
      {
        path: 'photo-gallery',
        loadChildren: () => import('@my-library/photo-gallery').then(m => m.PhotoGalleryModule)
      }
    ]
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