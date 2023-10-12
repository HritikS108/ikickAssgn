import { Component } from '@angular/core';

@Component({
  selector: 'app-new-feeds',
  templateUrl: './new-feeds.component.html',
  styleUrls: ['./new-feeds.component.css']
})
export class NewFeedsComponent {

    feeds = [
      {
         userImg : "https://cdn-icons-png.flaticon.com/512/666/666201.png",
         username : "User 1",
         postImageUrl : "https://c1.wallpaperflare.com/preview/142/913/158/spiti-himachal-pradesh-india-himalayas.jpg",
         caption : "There is no such thing as a perfect person, but someone’s heart can have a perfect intention.",
         likes:"122"
      },
      {
        userImg : "https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png",
        username : "User 2",
        postImageUrl : "https://images.unsplash.com/photo-1525310142237-24d142939cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        caption : "Life is simple. It’s just not easy.",
        likes:"58"
     },
     {
        userImg : "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
        username : "User 4",
        postImageUrl : "https://images.unsplash.com/photo-1613755317778-0003e3bfc2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        caption : "I’d like to stay here for a while and go wild.",
        likes:"943"
     },
     
     {
        userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwq-QgDNZh6feEWndoETeXuE1_TebPF77uhBIRtymuh5ke5E0iq3RiUqkc-R335fN3aVU&usqp=CAU",
        username : "User 6",
        postImageUrl : "https://images.unsplash.com/photo-1525310142237-24d142939cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        caption : "There is no such thing as a perfect person, but someone’s heart can have a perfect intention.",
        likes:"432"
     },
     {
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraa9yNaZ6NAhVrhFDMIUBEGjjcQJwzdc8IcHt4bENmomgTsmqy292vwqIBMFsNoBfKC8&usqp=CAU",
      username : "User 3",
      postImageUrl : "https://c4.wallpaperflare.com/wallpaper/955/62/567/paris-tower-eiffel-france-wallpaper-preview.jpg",
      caption : "You can regret a lot of things but you’ll never regret being kind.",
      likes:"292"
   },

    ]
}
