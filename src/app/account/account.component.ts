import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  standalone: true,
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports: [SidebarComponent, GalleryComponent, SearchbarComponent]
})

export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

