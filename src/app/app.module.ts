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

@NgModule({
	declarations: [AppComponent, NavbarComponent, ActionsComponent, ChannelsComponent, SearchPipe],
	imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, ReactiveFormsModule],
	providers: [ActionService, ChannelService],
	bootstrap: [AppComponent]
})
export class AppModule {}
