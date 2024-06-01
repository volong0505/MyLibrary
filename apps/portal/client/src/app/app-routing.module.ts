import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './portal/features/photo-list/photo-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./portal/core/layout/content/content.component').then((x) => x.ContentComponent),
        children: ([
            {
                path: '',
                component: PhotoListComponent
            }
        ])
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}