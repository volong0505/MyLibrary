import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminClientShellComponent } from './admin-client-shell/admin-client-shell.component';
import { AdminClientAuthGuardService } from '@my-library/admin-client-auth'
const routes: Routes = [
  {
    path: '',
    component: AdminClientShellComponent,
    canActivate: [AdminClientAuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'photo-gallery',
        pathMatch: 'full'
      },
      {
        path: 'photo-gallery',
        loadChildren: () => import('@my-library/admin-client-photo-gallery').then(m => m.AdminClientPhotoGalleryModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import("@my-library/admin-client-auth").then((m) => m.AdminClientAuthModule)
  }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking'}),
    ],
    exports: [RouterModule]
})
export class AdminClientShellRouterModule {}