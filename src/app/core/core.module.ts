import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { TravisService } from './services/travis/travis.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthService,
    TravisService
  ]
})
export class CoreModule { }
