import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientShellModule } from '@my-library/shell';
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
      ClientShellModule,
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}