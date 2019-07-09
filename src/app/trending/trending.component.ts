import { Component, OnInit } from '@angular/core';
import { YoutubeserviceService } from '../youtubeservice.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
public trendings: any ;
  constructor(private youtubeservice: YoutubeserviceService) { 
    this.trendings = [];
  }

  ngOnInit() {
    this.youtubeservice.gettrend().subscribe(list => this.trendings = list.items)
  }

}
