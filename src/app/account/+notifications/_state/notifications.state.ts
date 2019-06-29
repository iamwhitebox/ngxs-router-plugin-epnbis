import { State, Action, StateContext, Selector } from '@ngxs/store';
import { throwError, of as observableOf } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { NotificationsStateModel, ViewType } from './notifications.model';
import * as ACT from './notifications.actions';

@State<NotificationsStateModel>({
  name: 'notifications',
  defaults: {
    notifications: null,
    view: ViewType.List
  }
})
export class NotificationsState {
  @Selector()
  static notifications(state: NotificationsStateModel): string[] {
    return state.notifications;
  }

  @Selector()
  static view(state: NotificationsStateModel): ViewType {
    return state.view;
  }

  constructor(
    // private api: ApiNotificationsService
  ) {}

  @Action(ACT.GetNotifications)
  getNotifications({ patchState }: StateContext<NotificationsStateModel>, { payload }: ACT.GetNotifications) {
    return observableOf(['Notification 1', 'Notification 2', 'Notification 3']).pipe(
      tap(
        response => {
          patchState({
            notifications: response
          });
        }
      )
    );
  }

  @Action(ACT.ClearNotifications)
  clearNotifications({ setState }: StateContext<NotificationsStateModel>) {
    setState({
      notifications: null,
      view: ViewType.List
    });
  }

  @Action(ACT.SetViewType)
  setViewType({ patchState }: StateContext<NotificationsStateModel>, { payload }: ACT.SetViewType ) {
    patchState({
      view: payload
    });
  }

}
