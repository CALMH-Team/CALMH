import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { Constants } from './constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: Constants.LOGIN_URL,
    loadChildren: './shared/login/login.module#LoginPageModule'
  },
  {
    path: Constants.LOGOUT_URL,
    loadChildren: './shared/logout/logout.module#LogoutPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'conditions',
    loadChildren: './administrator/conditions/conditions.module#ConditionsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: './administrator/users/users.module#UsersPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'cases',
    loadChildren: './shared/cases/cases.module#CasesPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    loadChildren: './shared/about/about.module#AboutPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'recommendations',
    loadChildren: './user/recommendations/recommendations.module#RecommendationsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'get-help',
    loadChildren: './user/get-help/get-help.module#GetHelpPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'personal-data',
    loadChildren: './user/personal-data/personal-data.module#PersonalDataPageModule'
  },
  {
    path: 'disasters',
    loadChildren: './shared/disasters/disasters.module#DisastersPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'reactions',
    loadChildren: './user/reactions/reactions.module#ReactionsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'chronic-conditions',
    loadChildren: './user/personal-data/chronic-conditions/chronic-conditions.module#ChronicConditionsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.HOMEPAGE_ADMIN,
    loadChildren: './administrator/admin-home/admin-home.module#AdminHomePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.HOMEPAGE_VOLUNTEER,
    loadChildren: './volunteer/volunteer-home/volunteer-home.module#VolunteerHomePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.HOMEPAGE_USER,
    loadChildren: './user/user-home/user-home.module#UserHomePageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'user', loadChildren: './shared/user/user.module#UserPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
