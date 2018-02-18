
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserService } from './shared/service/user.service';
import { IUserService } from './shared/service/i.user.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';
import { DetailModule } from './detail/detail.module';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        SearchModule,
        DetailModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [{ provide: IUserService, useClass: UserService }],
    bootstrap: [AppComponent]
})
export class AppModule { }
