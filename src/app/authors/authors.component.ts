import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors : string[] = [];
  authorsTitle : string = '';
  constructor(private authorsService : AuthorsService) { }

  ngOnInit(): void {
    this.authors = this.authorsService.getAuthors();
    this.authorsTitle = `${this.authors.length} author${this.authors.length > 1 ? 's' : ''}`
  }

}
