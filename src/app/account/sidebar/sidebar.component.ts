import { Component, OnInit } from '@angular/core';

import { FilestackService } from '../../core/filestack.service';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(protected filestackService: FilestackService) { }

  ngOnInit() {
  }

  edit() {

  }

  upload() {
    this.filestackService.openFilePicker();
  }
  download() {}
  transform() {}

}
