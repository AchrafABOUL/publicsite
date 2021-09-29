import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  isEmpty: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isEmpty = !this.isEmpty;
  }
}
