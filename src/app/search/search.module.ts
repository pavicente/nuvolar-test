import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchRoutingModule,
        RouterModule
    ],
    declarations: [
        SearchComponent
    ],
    providers: [UserService]
})
export class SearchModule { }
