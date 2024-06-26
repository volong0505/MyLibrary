import { NgModule } from "@angular/core";
import { PortalClientShellComponent } from "./portal-client-shell/portal-client-shell.component";
import { PortalClientShellFooterComponent } from "./portal-client-shell-footer/portal-client-shell-footer.component";
import { PortalClientShellHeaderComponent } from "./portal-client-shell-header/portal-client-shell-header.component";
import { PortalClientShellRouterModule } from "./portal-client-shell-router.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        PortalClientShellRouterModule,
        CommonModule,
        BrowserModule
    ],
    declarations: [
        PortalClientShellComponent,
        PortalClientShellHeaderComponent,
        PortalClientShellFooterComponent
    ],
    exports: [
        RouterModule
    ]
})
export class PortalClientShellModule {}