import { NgModule } from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {SideBarComponent} from "./side-bar.component";


@NgModule({
  declarations: [
    SideBarComponent
  ],
  exports: [
    SideBarComponent
  ],
  imports:
    [
      BrowserModule,
      BrowserAnimationsModule,
      SidebarModule,
      ButtonModule,
    ]
})
export class SideBarModule {

}
