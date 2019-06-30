import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileResolverService } from './profile.resolver';

import { AccountComponent } from './account.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', pathMatch: 'full', component: IndexComponent },
      { path: 'notifications', loadChildren: './+notifications/notifications.module#NotificationsModule' },
      // { path: 'subscriptions', loadChildren: './+subscriptions/subscriptions.module#SubscriptionsModule' },
    ],
    resolve: {
      profile: ProfileResolverService
    },
    data: { title: 'Account' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
