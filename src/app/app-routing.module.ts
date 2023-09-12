import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstateListComponent } from './estates/estate-list/estate-list.component';
import { EstateDetailComponent } from './estates/estate-detail/estate-detail.component';
import { authGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { EstateEditComponent } from './estates/estate-edit/estate-edit.component';
import { CreateEstateComponent } from './estates/create-estate/create-estate.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { preventUnsaveChangesGuard } from './_guards/prevent-unsave-changes.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'estates', component: EstateListComponent, canActivate: [authGuard]},
  {path: 'estates/create', component: CreateEstateComponent},
  {path: 'estates/:id', component: EstateDetailComponent},
  {path: 'estates/edit/:id', component: EstateEditComponent},
  {path: 'members', component: MemberListComponent},
  {path: 'members/:id' , component: MemberDetailComponent},
  {path: 'members/edit/:id' , component: MemberEditComponent, canDeactivate: [preventUnsaveChangesGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: HomeComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
