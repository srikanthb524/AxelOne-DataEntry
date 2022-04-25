import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { RolesComponent } from './roles/roles.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    UserCreateComponent,
    RolesComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
