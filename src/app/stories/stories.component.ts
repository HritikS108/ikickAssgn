import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
      
  stories = [
    {
      storyImage: 'https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      storyLabel: 'User 1'
    },
    {
      storyImage: 'https://i.pinimg.com/1200x/43/b7/bb/43b7bb786f596c514f6f3f7d530f83c1.jpg',
      storyLabel: 'User 2'
    },
    {
      storyImage: 'https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      storyLabel: 'User 3'
    },
    {
      storyImage: 'https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkYWtofGVufDB8fDB8fHww&w=1000&q=80',
      storyLabel: 'User 4'
    },
    {
      storyImage: 'https://www.tuktukdesign.com/wp-content/uploads/2021/03/person-icon-520x520.jpg',
      storyLabel: 'User 5'
    },
    {
      storyImage: 'https://cdn-icons-png.flaticon.com/512/62/62650.png',
      storyLabel: 'User 6'
    },
    {
      storyImage: 'https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      storyLabel: 'User 7'
    },
    {
      storyImage: 'https://i.pinimg.com/1200x/43/b7/bb/43b7bb786f596c514f6f3f7d530f83c1.jpg',
      storyLabel: 'User 8'
    },
    {
      storyImage: 'https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      storyLabel: 'User 9'
    },
    {
      storyImage: 'https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkYWtofGVufDB8fDB8fHww&w=1000&q=80',
      storyLabel: 'User 10'
    },
    {
      storyImage: 'https://www.tuktukdesign.com/wp-content/uploads/2021/03/person-icon-520x520.jpg',
      storyLabel: 'User 11'
    },
    {
      storyImage: 'https://cdn-icons-png.flaticon.com/512/62/62650.png',
      storyLabel: 'User 12'
    },
  ]
}
