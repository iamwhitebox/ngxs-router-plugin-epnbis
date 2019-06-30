import { UserProfile } from './account.model';

export class SetProfile {
  static readonly type = '[ACCOUNT - PROFILE] Set Profile';

  constructor(public payload: UserProfile) {}
}
