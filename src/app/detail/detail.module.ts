import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DetailRoutingModule,
        RouterModule
    ],
    declarations: [
        DetailComponent
    ],
    providers: [UserService]
})
export class DetailModule { }
