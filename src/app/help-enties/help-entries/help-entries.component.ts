import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HelpEntriesService } from 'src/app/shared/help-entries.service';
import { HelpEntries } from 'src/app/shared/help-entries.model';
import { HelpEntryComponent } from '../help-entry/help-entry.component';

@Component({
  selector: 'app-help-entries',
  templateUrl: './help-entries.component.html',
  styleUrls: []
})
export class HelpEntriesComponent implements OnInit {

  constructor(private service: HelpEntriesService) { }
  @ViewChildren(HelpEntryComponent) helpEntryComponents: QueryList<HelpEntryComponent>;
  edit: boolean = true;
  helpEntries: HelpEntries;

  ngOnInit() {
    this.helpEntries = this.service.ServeMockHelpEntry();
    console.log(this.helpEntries)
  }

  collapseHelpEntry(id: number): void {
    this.helpEntryComponents.find(e => e.entry.id == id).collapse();
  }
}
