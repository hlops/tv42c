import {Component, OnInit} from "@angular/core";
import {Source} from "./sources";
import {SourceService} from "./source.service";

@Component({
  selector: 'app-sources',
  templateUrl: 'sources.component.html',
  styleUrls: ['sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: Source[] = [];

  constructor(private sourceService: SourceService) {
  }

  ngOnInit() {
    let sourcesComponent = this;
    this.sourceService.getSources().subscribe(function (sources: Source[]) {
      sourcesComponent.sources = sources;
    });
  }
}
