import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TdformComponent } from './tdform/tdform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  { path: '', redirectTo: '/tdform', pathMatch: 'full' },
  { path: 'tdform', component: TdformComponent },
  { path: 'reactiveform', component: ReactiveformComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
