import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Home/index/index.component';
import { PostListComponent } from './Posts/post-list/post-list.component';


const routes: Routes = [
  { path:'',component:IndexComponent,pathMatch:'full' },
  { path: 'Posts',component:PostListComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
