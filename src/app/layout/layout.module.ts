import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
