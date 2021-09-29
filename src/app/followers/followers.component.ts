import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers = [];
  constructor(private followerService: FollowerService) { }

  ngOnInit(): void {
    this.followerService.getAll()
    .subscribe(followers => {
      this.followers = followers as [];
      console.log(this.followers);
    });
  }


}
