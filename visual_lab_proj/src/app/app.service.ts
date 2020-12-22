import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  faceDetection(pictureUrl: string): Observable<any> {
    const azureUrl = 'https://twarz-2.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&recognitionModel=recognition_03&returnRecognitionModel=false&detectionModel=detection_02&faceIdTimeToLive=86400';
    const headers = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '20a34056f95949ef9341423b58a8b448'
    };
    const body = { url: pictureUrl};


    return this.http.post(azureUrl, body, {headers});

  }

}
