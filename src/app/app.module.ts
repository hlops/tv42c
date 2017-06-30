import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ActionsComponent} from "./actions/actions.component";
import {ChannelsComponent} from "./channels/channels.component";
import {ChannelService} from "./channels/channel.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionsComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
