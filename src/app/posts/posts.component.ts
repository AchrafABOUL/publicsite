import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getAll().subscribe((response) => {
      this.posts = response as [];
    });
  }
  addPost(input: HTMLInputElement) {
    let newPost = { title: input.value };
    input.value = '';
    this.postService.create(newPost).subscribe(
      (response: any) => {
        this.posts.splice(0, 0, { ...response, ...newPost });
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          alert('Bad request Here');
          //this.form.setErrors(error);
        } else throw error;
      }
    );
  }
  deletePost(post: any) {
    this.postService.delete(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post was already deleted');
        } else throw error;
      }
    );
  }
}
