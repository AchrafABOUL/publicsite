import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArchiveDetailsComponent } from './archive-details/archive-details.component';
import { RouterModule } from '@angular/router';
import { ArchiveErrorComponent } from './archive-error/archive-error.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    StarComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    CourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    FollowersComponent,
    ArchiveHomeComponent,
    ArchiveDetailsComponent,
    ArchiveErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ArchiveHomeComponent
      },
      {
        path: 'archive/:year/:month',
        component: ArchiveDetailsComponent
      },
      {
        path: '**',
        component: ArchiveErrorComponent
      }
    ])
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
