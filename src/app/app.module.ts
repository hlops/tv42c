import { ActionService } from './actions/action.service';
import { ActionsComponent } from './actions/actions.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelService } from './channels/channel.service';
import { ChannelsComponent } from './channels/channels.component';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './common/SearchPipe';
import { SourcesComponent } from './sources/sources.component';
import {SourceService} from "./sources/source.service";
import { ScheduleComponent } from './schedule/schedule.component';
import {ScheduleService} from "./schedule/schedule.service";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ActionsComponent,
		ChannelsComponent,
		SourcesComponent,
		SearchPipe,
		SourcesComponent,
		ScheduleComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, ReactiveFormsModule],
	providers: [ActionService, ChannelService, SourceService, ScheduleService],
	bootstrap: [AppComponent]
})
export class AppModule {}
