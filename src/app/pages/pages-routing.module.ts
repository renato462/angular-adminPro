import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import {Routes, RouterModule} from '@angular/router';
import{ NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'dashboard', component: PagesComponent,
  children:[
    { path: '', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    
  ] },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

