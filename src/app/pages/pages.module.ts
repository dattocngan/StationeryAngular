import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import {MainModule} from "./main/main.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MainModule
  ]
})
export class PagesModule { }
