import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule,
        MaterialModule
    ],
    exports: [
    ]
})

export class DashboardModule {
}
