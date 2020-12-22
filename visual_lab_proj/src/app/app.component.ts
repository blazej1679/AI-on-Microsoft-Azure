import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from './app.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  imageUrl = '';
  public borders: any[] = [];
  noPhotoInUrl = false;



  constructor(private fb: FormBuilder,
              private appService: AppService) {
    this.form = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(/^https?/)]]
    });
  }

  acceptUrl(): void {
    this.imageUrl = this.form.controls.url.value;

    this.appService.faceDetection(this.imageUrl).subscribe(response => {
      this.borders = [];
      for (const item of response) {
        this.borders.push({
          height: item.faceRectangle.height,
          left: item.faceRectangle.left,
          top: item.faceRectangle.top,
          width: item.faceRectangle.width,
        });
        console.log(this.borders);
      }
    });
  }


}
