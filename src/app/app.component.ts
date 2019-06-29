import { Component, OnInit } from '@angular/core';

import { Actions, ofActionSuccessful } from '@ngxs/store';
import { RouterNavigation } from '@ngxs/router-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private actions$: Actions
  ) { }

  ngOnInit() {
    this.actions$.pipe(
      ofActionSuccessful(RouterNavigation)
    ).subscribe(() => {
      console.warn('::: RouterNavigation Plugin Event :::');
    });
  }
}
