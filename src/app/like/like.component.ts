import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ChangeEventData{
  likes : number;
  isLiked: boolean
}
@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input('isActive') isActive : boolean = false;
  @Input('likesNumber') likesNumber: number = 0;
  @Output('change') changeEvent : EventEmitter<ChangeEventData> = new EventEmitter<ChangeEventData>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.likesNumber += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
    this.changeEvent.emit({
      likes: this.likesNumber,
      isLiked: this.isActive
    })
  }

}
