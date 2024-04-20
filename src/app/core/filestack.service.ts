import * as filestack from 'filestack-js';
import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { PickerOptions } from 'filestack-js';

@Injectable({
  providedIn: 'root'
})
export class FilestackService {
  private fileStackApiKey = 'Awrzu0amMTUmvoUYrPThrz';
  private client = filestack.init(this.fileStackApiKey);
  private picker: any = '';
  private photosAdded = new Subject<filestack.PickerFileMetadata[]>();

  constructor() {
    const options: PickerOptions= {
        accept: [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/bmp',
            'image/gif',
        ],
        storeTo: {
            workflows: ['02d9b2d3-de9b-405c-8345-47b5d6d0f7d3']
        },
        transformations: {
            crop: true,
            circle: true,
            rotate: true
        },
        onFileSelected: (file) => {
            // If you throw any errOutput, EventEmitteror in this function it will reject the file selection.
            // The error message will be displayed to the user as an alert.
            if (file.size > 1000 * 1000) {
                throw new Error('File too big, select something smaller than 1MB');
            }
        },
        onUploadDone: (file) => {
            this.photosAdded.next(file.filesUploaded);
        }
    };

    this.picker = this.client.picker(options);
  }

  openFilePicker = (): any => {
    this.picker.open();
  }

  getApiKey = () => {
    return this.fileStackApiKey;
  }

  getPhotosAdded = () => {
    return this.photosAdded;
  }
}
