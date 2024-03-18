import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientShellModule } from '@my-library/shell';
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../environments/environment";
import { NZ_I18N, vi_VN } from "ng-zorro-antd/i18n";
import { apiInterceptorProvider } from "./shared";

@NgModule({
    declarations: [AppComponent],
    imports: [
      ClientShellModule,
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      StoreModule.forRoot(),
      EffectsModule.forRoot()
    ],
    providers: [
      { provide: NZ_I18N, useValue: vi_VN },
      apiInterceptorProvider(environment.host)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}