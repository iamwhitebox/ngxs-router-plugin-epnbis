import { NgModule } from '@angular/core';

// import { PdpSharedModule } from '@pdp/shared';
// import { PdpUiModule } from '@pdp/ui';

import { NgxsModule } from '@ngxs/store';
import { AccountState } from './_state/account.state';
import { NotificationsState } from './+notifications/_state/notifications.state';

import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    // PdpUiModule,
    NgxsModule.forFeature([
      AccountState,
      NotificationsState
    ]),
    AccountRoutingModule
  ],
  declarations: [AccountComponent, IndexComponent]
})
export class AccountModule { }
