import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from './../shared/shared.module';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule,
        SharedModule
    ],
    exports: [
    ]
})

export class DashboardModule {
}
