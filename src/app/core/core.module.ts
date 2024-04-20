import { NgModule } from '@angular/core';

import { ApiService } from './api.service';
import { CanonService } from './canon.service';
import { FilestackService } from './filestack.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ApiService,
    CanonService,
    FilestackService
  ]
})
export class CoreModule { }
