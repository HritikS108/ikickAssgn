import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { StoriesComponent } from './stories/stories.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NewFeedsComponent } from './new-feeds/new-feeds.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostCardComponent } from './post-card/post-card.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    StoriesComponent,
    SidePanelComponent,
    NewFeedsComponent,
    PostCardComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
