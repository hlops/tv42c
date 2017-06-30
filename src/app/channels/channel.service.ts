import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Channel} from "./channel";
import {CommonService} from "../common/CommonService";

@Injectable()
export class ChannelService extends CommonService {

  private resourceUrl = 'api/channels';

  constructor(private http: Http) {
    super();
  }

  getChannels(): Observable<Channel[]> {
    return this.http.get(this.resourceUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
