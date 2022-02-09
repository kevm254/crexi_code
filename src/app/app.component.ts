import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from "./components/base.component";
import {IGlobalState} from "./models/store/global-state.model";
import {Store} from "@ngrx/store";

@Component({
    selector: 'crx-root',
    styleUrls: ['./app.component.less'],
    templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnDestroy {
    constructor(
        private store: Store<IGlobalState>,
    ) {
        super(store);
        this.store = store;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
