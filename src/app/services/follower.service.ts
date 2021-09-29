import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends DataService{
  url="https://api.github.com/users/mosh-hamedani/followers";
  constructor(http: HttpClient) { 
    super(http);
  }
  getFollowers(){
    return this.getAll();
  }
}
