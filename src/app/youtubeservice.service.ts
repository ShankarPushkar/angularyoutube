import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeserviceService {
  public Data: Subject<any>;

  constructor(private http: HttpClient) {
    this.Data = new Subject();
  }
  getdatafrom(value) {
    this.Data = value;
  }
  getVideosForChanel(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    // let url =
// tslint:disable-next-line: max-line-length
      // 'https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=in&key=AIzaSyDICII6NSX4J7jD6hFRKG83cPCSNPNFxhQ&maxResults=20';
// tslint:disable-next-line: max-line-length
    let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDICII6NSX4J7jD6hFRKG83cPCSNPNFxhQ&maxResults=25&q=' + this.Data + '&part=snippet';
    return this.http.get(url);
  }
  gettrend(): Observable <any> {
// tslint:disable-next-line: max-line-length
    let url ='https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=in&videoCategoryId=10&key=AIzaSyDICII6NSX4J7jD6hFRKG83cPCSNPNFxhQ';
    return this.http.get(url);
  }
}
