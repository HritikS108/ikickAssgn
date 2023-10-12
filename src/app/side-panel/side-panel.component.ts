import { Component } from '@angular/core';
import { faHouse, faCompass, faSearch, faUser,faBell, faPlus, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {

    faHouse = faHouse;
    faCompass = faCompass;
    faSearch = faSearch;
    faUser = faUser;
    faBell = faBell;
    faPlus = faPlus;
    faMessage = faMessage;
}
