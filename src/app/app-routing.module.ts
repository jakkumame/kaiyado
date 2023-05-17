import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard'


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then( m => m.HomePageModule),
      canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then( m => m.AuthModule),
      // canActivate: [AuthGuard],
  },
  {
    path: 'usual-edit',
    loadChildren: () => import('./reservation/usual-edit/usual-edit.module').then( m => m.UsualEditPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
