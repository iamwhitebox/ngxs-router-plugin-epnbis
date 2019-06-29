import { ViewType } from './notifications.model';

export class GetNotifications {
  static readonly type = '[NOTIFICATIONS] Get Notifications';

  constructor(public payload: any) {}
}

export class ClearNotifications {
  static readonly type = '[NOTIFICATIONS] Clear Notifications';
}

export class SetViewType {
  static readonly type = '[NOTIFICATIONS] Set View Type';

  constructor(public payload: ViewType) {}
}
