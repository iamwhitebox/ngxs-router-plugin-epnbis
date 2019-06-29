import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select, Actions, ofActionSuccessful } from '@ngxs/store';

// import { RouterNavigation } from '@ngxs/router-plugin';

import { AccountState } from './_state/account.state';
import { NotificationsState } from './+notifications/_state/notifications.state';
import * as ACT from './+notifications/_state/notifications.actions';
import { ViewType } from './+notifications/_state/notifications.model';

// import { PdpUserProfile, PdpNotification, ApiResponseCollection } from '@pdp/shared';
import { UserProfile } from './_state/accounts.model';
// import { PdpUiTab, UiState, SetRouteParams } from '@pdp/ui';

@Component({
  selector: 'pdp-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Select(AccountState.profile) profile$: Observable<UserProfile>;
  @Select(NotificationsState.view) view$: Observable<ViewType>;

  public ViewType = ViewType;

  constructor(
    private store: Store,
    private actions$: Actions
  ) { }

  // changeViewType(viewType: ViewType) {
  //   this.store.dispatch(new ACT.SetViewType(viewType));
  // }

  ngOnInit() {
    // this.actions$.pipe(
    //   ofActionSuccessful(RouterNavigation)
    // ).subscribe(() => {
    //   console.warn('::: RouterNavigation Plugin Event :::');
    // });
  }

}
