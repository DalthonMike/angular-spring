import { NgModule } from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {SideNavComponent} from "./side-nav.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ],
    imports:
        [
            BrowserModule,
            BrowserAnimationsModule,
            SidebarModule,
            ButtonModule,
            RouterModule,
        ]
})
export class SideNavModule {

}
