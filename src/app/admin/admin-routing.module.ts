import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'group', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
