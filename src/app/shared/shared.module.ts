import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LightboxModule
  ],
  exports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
