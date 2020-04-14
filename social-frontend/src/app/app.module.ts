import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignInLayoutComponent} from "./feature/sign-in/sign-in-layout.component";
import {SignInComponent} from "./feature/sign-in/sign-in.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import { UserPageComponent } from './feature/user-page/user-page.component';
import { SearchComponent } from './feature/search/search.component';
import {AuthGuard} from "./auth/auth.guard";
import {AuthService} from "./auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { CardComponent } from './feature/card/card.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SignInComponent,
    SignInLayoutComponent,
    UserPageComponent,
    SearchComponent,
    CardComponent,
    SignUpComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
