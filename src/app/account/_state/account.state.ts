import { State, Action, StateContext, Selector } from '@ngxs/store';
import { throwError, of as observableOf } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { UserProfile } from './account.model';
import { AccountStateModel } from './account.model';
import * as ACT from './account.actions';

@State<AccountStateModel>({
  name: 'account',
  defaults: {
    profile: null
  }
})
export class AccountState {

  @Selector()
  static profile(state: AccountStateModel): UserProfile {
    return state.profile;
  }

  constructor() {
  }

  @Action(ACT.SetProfile)
  setProfile({ patchState }: StateContext<AccountStateModel>, { payload }: ACT.SetProfile) {
    patchState({
      profile: payload
    });
  }

}
