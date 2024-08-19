import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { HelpComponent } from './main/help/help.component';
import { RegistrationComponent } from './main/registration/registration.component';
import { ReportComponent } from './main/report/report.component';
import { LoginComponent } from './auth/login/login.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: UserRegistrationComponent,
  },
  {
    path: '**',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
