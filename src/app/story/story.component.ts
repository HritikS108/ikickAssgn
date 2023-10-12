import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  @Input() storyImage: string = "https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ;
  @Input() storyLabel: string = "";

  constructor(){
    // this.storyImage = 'https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    console.log(this.storyImage);
    // this.loadImage(this.storyImage);
  }

  ngOnInit() {
    this.loadImage(this.storyImage);
  }
  
  loadImage(url: string) {
    const img = new Image();
    img.onload = () => {
      console.log(`Image loaded successfully: ${url}`);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${url}`);
    };
    img.src = url;
  }
}
