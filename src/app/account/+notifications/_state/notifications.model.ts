export enum ViewType {
  List = 'list',
  Grid = 'grid'
}

export class NotificationsStateModel {
  notifications: string[];
  view: ViewType;
}
