import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './home/page.component';
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: PageComponent },
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
