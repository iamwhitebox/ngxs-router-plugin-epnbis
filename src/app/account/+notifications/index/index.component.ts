import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Store, Select, Actions, ofActionSuccessful, ofActionDispatched } from '@ngxs/store';
import { NotificationsState } from '../_state/notifications.state';
import * as ACT from '../_state/notifications.actions';
import { ViewType } from '../_state/notifications.model';

// import { PdpNotification } from '@pdp/shared';

@Component({
  selector: 'pdp-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  @Select(NotificationsState.notifications) notifications$: Observable<string[]>;
  @Select(NotificationsState.view) view$: Observable<ViewType>;

  constructor(
    private store: Store,
    private actions$: Actions,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        // console.log('-- PARAMS: ', params);
        // this.store.dispatch(new ACT.ResetNotifications());
        this.store.dispatch(new ACT.GetNotifications(null));
      }
    );

    // this.store.dispatch(new ACT.GetNotifications(null));

   /**
    * // When changing the list:
    * this.itemEnterState = Math.random()
    *   .toString(36)
    *   .substring(2);
    */
  }

  ngOnDestroy() {
    this.store.dispatch(new ACT.ClearNotifications());
  }

}
