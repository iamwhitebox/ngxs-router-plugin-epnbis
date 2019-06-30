import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Store } from '@ngxs/store';
import * as ACT from './_state/account.actions';

import { UserProfile } from './_state/account.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<UserProfile> {

  constructor(
    private store: Store
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return observableOf(true).pipe(
      tap(_ => {
        return this.store.dispatch(new ACT.SetProfile({ userName: 'user' }));
      })
    );
  }
}
