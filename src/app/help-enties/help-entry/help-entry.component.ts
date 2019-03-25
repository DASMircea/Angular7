import { Component, OnInit, Input } from '@angular/core';
import { HelpEntry } from 'src/app/shared/help-entry.model';
import { HelpEntriesService } from 'src/app/shared/help-entries.service';

@Component({
  selector: 'app-help-entry',
  templateUrl: './help-entry.component.html',
  styleUrls: []
})
export class HelpEntryComponent implements OnInit {

  constructor(private service: HelpEntriesService) { }
  @Input() entry: HelpEntry
  collapsed: boolean = true;
  ngOnInit() {
    
  }

  collapse(): void{
    this.collapsed = !this.collapsed;
  }
}
