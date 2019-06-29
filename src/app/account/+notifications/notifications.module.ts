import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { NgxsModule } from '@ngxs/store';
import { NotificationsState } from './_state/notifications.state';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { IndexComponent } from './index/index.component'
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  imports: [
    SharedModule,
    NgxsModule.forFeature([
      NotificationsState
    ]),
    NotificationsRoutingModule
  ],
  declarations: [
    NotificationsComponent,
    IndexComponent,
    InboxComponent
  ]
})
export class NotificationsModule { }
