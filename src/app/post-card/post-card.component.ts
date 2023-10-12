import { Component, Input } from '@angular/core';
import { faComment , faShare, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

    @Input() userImg : string = "";
    @Input() username: string = "";
    @Input() postImage: string = "";
    @Input() caption: string = "";
    @Input() likes: string = "";

    faComment = faComment;
    faShare = faShare;
    faHeart = faHeart;
}
