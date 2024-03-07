import { NgModule } from "@angular/core";
import { ClientShellRouterModule } from "./client-shell-router.module";
import { ShellComponent } from "./shell/shell.component";
import { BrowserModule } from "@angular/platform-browser";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
    imports: [
        ClientShellRouterModule,
        CommonModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzBreadCrumbModule,
        NzGridModule
    ],
    declarations: [
        ShellComponent
    ],
    exports: [
        ClientShellRouterModule
    ]
})
export class ClientShellModule {}