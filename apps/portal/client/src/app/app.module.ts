import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { PortalClientShellModule } from '@my-library/portal-client-shell';
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        PortalClientShellModule,
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}