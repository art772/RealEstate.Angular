import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstateListComponent } from './estates/estate-list/estate-list.component';
import { EstateDetailComponent } from './estates/estate-detail/estate-detail.component';
import { authGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'estates', component: EstateListComponent, canActivate: [authGuard]},
  {path: 'estates/:id', component: EstateDetailComponent},
  {path: 'members' , component: MemberListComponent},
  {path: '**', component: HomeComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
