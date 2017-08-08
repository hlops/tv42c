import { Component, OnInit } from '@angular/core';
import { ChannelService } from './channel.service';
import { Channel } from './channel';
import * as _ from 'lodash';
import t from '../common/TranslationService';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-channels',
	templateUrl: './channels.component.html',
	styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
	private channels: Channel[] = [];

	filteredChannels: Channel[] = [];
	filteredGroups: string[] = [];
	queryControl: FormControl = new FormControl();
	query: string = '';

	constructor(private channelService: ChannelService) {}

	ngOnInit() {
		let channelsComponent = this;
		this.channelService.getChannels().subscribe(function(channels: Channel[]) {
			channelsComponent.channels = channels;
			channelsComponent.filterChanged();
		});
		this.queryControl.valueChanges.subscribe(this.filterChanged.bind(channelsComponent));
	}

	private filterChanged() {
		let q: string = this.query.toLocaleLowerCase();
		this.filteredChannels = _.filter(
			this.channels,
			(channel: Channel) => _.toLower(channel._name).indexOf(q) >= 0
		);
		this.filteredGroups = _.uniq(_.map(this.filteredChannels, channel => channel['_group']));
	}

	//noinspection JSMethodCanBeStatic
	transliterate(value) {
		return t(value).toLowerCase();
	}
}
