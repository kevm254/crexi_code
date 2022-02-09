import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from "../base.component";
import {Store} from "@ngrx/store";
import {IGlobalState} from "../../models/store/global-state.model";
import {GlobalService} from "../../services/global.service";
import {FetchedUser} from "../../models/FetchedUser.model";
import {ConverterUtil} from "../../utils/converter.utils";
import {User} from "../../models/User.model";

@Component({
    selector: 'app-user-profile-list',
    templateUrl: './user-profile-list.component.html',
    styleUrls: ['./user-profile-list.component.less']
})
export class UserProfileListComponent extends BaseComponent implements OnInit, OnDestroy {
    users: User[];

    constructor(
        private store: Store<IGlobalState>,
        private globalService: GlobalService
    ) {
        super(store);
    }

    ngOnInit(): void {
        this.registerUserSub();
        this.fetchUsersAndUpdateStore();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    fetchUsersAndUpdateStore() {
        this.globalService.GetUsers(10).subscribe((fetchedUsers: FetchedUser) => {
            this.updateStoreWithUsers(fetchedUsers);
        })
    }

    updateStoreWithUsers(fetchedUser: FetchedUser) {
        this.reg$(this.globalCommands.Api.UpdateUsers(ConverterUtil.convertFetchedUserToUser(fetchedUser)));
    }

    registerUserSub() {
        this.reg$(
            this.globalSelect.Api.GetUsers().subscribe((data: User[]) => {
                this.users = data;
            })
        );
    }

}
