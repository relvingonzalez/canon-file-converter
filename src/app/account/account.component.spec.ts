import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { LightboxModule } from 'ngx-lightbox';

import { AccountComponent } from './account.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountComponent,
        GalleryComponent,
        SidebarComponent
      ],
      providers: [
        HttpClient
      ],
      imports: [
        HttpClientModule,
        LightboxModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
