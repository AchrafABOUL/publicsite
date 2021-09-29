import { Component } from '@angular/core';
import { ChangeEventData } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authors-project';
  info = {
    body: 'text here',
    isLiked: true,
    numberOfLikes: 400
  };
  handleChange(eventArgs: ChangeEventData){
    console.log(eventArgs)
  }
}
