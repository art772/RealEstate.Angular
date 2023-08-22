import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EstateListComponent } from './estates/estate-list/estate-list.component';
import { EstateDetailComponent } from './estates/estate-detail/estate-detail.component';
import { EstateCardComponent } from './estates/estate-card/estate-card.component';
import { SharedModule } from './_modules/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { StatesComponent } from './states/states.component';
import { GenresComponent } from './genres/genres.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    EstateListComponent,
    EstateDetailComponent,
    EstateCardComponent,
    CategoriesComponent,
    StatesComponent,
    GenresComponent,
    TagsComponent,
    UsersComponent,
    MemberListComponent,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
