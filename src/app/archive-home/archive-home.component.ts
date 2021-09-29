import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.scss']
})
export class ArchiveHomeComponent implements OnInit {

  archives = [
    {
      year: 2019,
      month: 1
    },
    {
      year: 2019,
      month: 2
    },
    {
      year: 2019,
      month: 3
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
