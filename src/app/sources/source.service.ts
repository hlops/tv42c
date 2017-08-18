import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Source } from './sources';
import { CommonService } from '../common/CommonService';

@Injectable()
export class SourceService extends CommonService {
	private resourceUrl = 'api/sources';

	constructor(private http: Http) {
		super();
	}

	getSources(): Observable<Source[]> {
		return this.http.get(this.resourceUrl).map(res => res.json()).catch(this.handleError);
	}
}
