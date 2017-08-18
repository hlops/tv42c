import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { ChannelsComponent } from './channels/channels.component';
import { SourcesComponent } from './sources/sources.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
	{
		path: 'actions',
		component: ActionsComponent
	},
	{
		path: 'channels',
		component: ChannelsComponent
	},
	{
		path: 'sources',
		component: SourcesComponent
	},
	{
		path: 'schedule',
		component: ScheduleComponent
	},
	{
		path: '**',
		redirectTo: 'schedule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {}
