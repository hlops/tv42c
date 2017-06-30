import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ActionsComponent } from './actions/actions.component';
import {ChannelsComponent} from "./channels/channels.component";

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
