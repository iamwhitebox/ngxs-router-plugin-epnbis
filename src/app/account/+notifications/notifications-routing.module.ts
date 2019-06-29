import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    children: [
      { path: '', pathMatch: 'full', component: IndexComponent },
      { path: 'inbox', component: InboxComponent },
      { path: ':notificationsType', component: IndexComponent },
    ],
    data: { title: 'Notifications' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
