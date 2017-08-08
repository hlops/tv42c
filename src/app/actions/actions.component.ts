import { Component, OnInit } from '@angular/core';
import { ActionService } from './action.service';

@Component({
	selector: 'app-actions',
	templateUrl: './actions.component.html',
	styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
	private actions;

	constructor(private actionService: ActionService) {}

	ngOnInit() {
		this.actionService.getActions().subscribe(data => {
			return (this.actions = data);
		});
	}
}
