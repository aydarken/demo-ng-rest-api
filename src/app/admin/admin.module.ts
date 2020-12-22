import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';
import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [UserComponent, GroupComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
