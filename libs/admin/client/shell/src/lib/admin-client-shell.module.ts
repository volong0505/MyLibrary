import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { AdminClientShellRouterModule } from "./admin-client-shell-router.module";
import { AdminClientAuthGuardService, AdminClientAuthService } from "@my-library/admin-client-auth";
import { AdminClientShellComponent } from "./admin-client-shell/admin-client-shell.component";

@NgModule({
    imports: [
        AdminClientShellRouterModule,
        CommonModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzBreadCrumbModule,
        NzGridModule,
        EffectsModule.forRoot([
            AdminClientAuthGuardService
        ])
    ],
    declarations: [
        AdminClientShellComponent
    ],
    exports: [
        AdminClientShellRouterModule
    ],
    providers: [
        AdminClientAuthService
    ]
})
export class AdminClientShellModule {}