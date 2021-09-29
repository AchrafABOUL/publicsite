import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.scss']
})
export class ArchiveDetailsComponent implements OnInit {
  year : string | null = '';
  month : string | null = '';
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(paramMap => {
      this.year = paramMap.get('year');
      this.month = paramMap.get('month')
    });
  }
  returnToHome() {
    this.router.navigate(['']);
  }

}
