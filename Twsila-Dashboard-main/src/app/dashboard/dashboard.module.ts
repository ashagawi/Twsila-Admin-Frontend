import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AdminRolesComponent } from './admin-roles/admin-roles.component';


@NgModule({
  declarations: [
    AdminUserComponent,
    CreateUserComponent,
    AdminRolesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    DashboardRoutingModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    ButtonModule ,
    TableModule,
    MultiSelectModule
  ]
})
export class DashboardModule { }
