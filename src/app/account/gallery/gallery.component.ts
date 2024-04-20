import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { CanonService } from '../../core/canon.service';
import { FilestackService } from '../../core/filestack.service';
import { PickerFileMetadata } from 'filestack-js';
import { CommonModule } from '@angular/common';

type GalleryImage = {
  src: string,
  caption: string,
  thumb: string
}

type GalleryAlbum = {
  images: GalleryImage[],
  date: Date,
}

@Component({
  standalone: true,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit, OnDestroy {
  public albums: GalleryAlbum[] = [];

  constructor(protected filestackService: FilestackService, protected canonService: CanonService, private _lightbox: Lightbox) { }

  ngOnInit() {
    this.loadImages(1, 6);
    this.loadImages(7, 10);
    this.albums.sort((a, b) => b.date.getDate() - a.date.getDate());

    this.filestackService.getPhotosAdded().subscribe((photos) => {
      this.addFilesToCollection(photos);
    });

    //TODO FIX endpoint
    //this.pollCameraImages();
    //End TODO

    // this.intervalId = setInterval(() => {this.pollCameraImages()}, 5000);
  }

  loadImages(from: number, to: number) {
    const startDate = new Date(2019, 11, 6);
    const endDate = new Date();
    const album: GalleryAlbum = {images: [], date: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))};
    for (let i = from; i <= to; i++) {
      const src = `assets/images/${i}.webp`;
      const caption = `Image ${i}`;
      const thumb = `assets/images/${i}.webp`;
      const image = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      album.images.push(image);
    }

    this.albums.push(album);
  }

  open(albumIndex: number, index: number): void {
    // open lightbox
    this._lightbox.open(this.albums[albumIndex].images, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  addFilesToCollection(photos: PickerFileMetadata[]) {
    for (let i = photos.length - 1; i >= 0; i--) {
      this.albums[0].images.push({src: photos[i].url, caption: 'Image 2', thumb: photos[i].url});
    }
  }

  // adds new pic from camera if not found
  pollCameraImages() {
    this.canonService.getCameraContents().subscribe((files) => {
      const imgUrl = files.url[files.url.length - 1];
      const latestAlbumImages = this.albums[0].images;
      if (!latestAlbumImages.find(img => img.src === imgUrl)) {
        const image = {src: imgUrl, caption: 'Image 2', thumb: imgUrl};
        this.albums[0].images.push(image);
      }
    });
  }

  ngOnDestroy() {
    // clearInterval(this.intervalId);
  }

}
