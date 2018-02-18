import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail.component';

const detailsRoutes: Routes = [
    {
        path: 'detail/:login',
        component: DetailComponent,
        data: { page: 'detail' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(detailsRoutes)],
    exports: [RouterModule]
})
export class DetailRoutingModule { }
