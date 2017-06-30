import { Component, OnInit } from '@angular/core';
import {ChannelService} from "./channel.service";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor(private channelService: ChannelService) {
  }

  ngOnInit() {
    console.log(this.channelService.getChannels());
  }

}
