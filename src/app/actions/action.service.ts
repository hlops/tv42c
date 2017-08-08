import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {CommonService} from "../common/CommonService";
import {Action} from "./action";

@Injectable()
export class ActionService extends CommonService {
  private resourceUrl = 'api/actions';

  constructor(private http: Http) {
    super();
  }

  getActions(): Observable<Action[]> {
    return this.http.get(this.resourceUrl).map(res => res.json()).catch(this.handleError);
  }
}
