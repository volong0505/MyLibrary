import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { ClientShellRouterModule } from "./admin-client-shell-router.module";
import { AdminClientShellComponent } from "..";

@NgModule({
    imports: [
        ClientShellRouterModule,
        CommonModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzBreadCrumbModule,
        NzGridModule,
        EffectsModule.forRoot([
            AuthGuardService
        ])
    ],
    declarations: [
        AdminClientShellComponent
    ],
    exports: [
        ClientShellRouterModule
    ],
    providers: [
        AuthService
    ]
})
export class ClientShellModule {}