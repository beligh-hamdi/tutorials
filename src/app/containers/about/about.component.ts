import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET, AppState} from '../../shared/reducers';
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }

  ngOnInit() {
  }

}
