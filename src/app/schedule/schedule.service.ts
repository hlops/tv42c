import { Injectable } from '@angular/core';
import { CommonService } from '../common/CommonService';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Schedule } from './schedule';

@Injectable()
export class ScheduleService extends CommonService {
	private resourceUrl = 'api/schedule';

	constructor(private http: Http) {
		super();
	}

	getSchedule(): Observable<Schedule[]> {
		return this.http.get(this.resourceUrl).map(res => res.json()).catch(this.handleError);
	}
}
