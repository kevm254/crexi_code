import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User.model";

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.less']
})
export class UserProfileDetailComponent implements OnInit {
    users: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
