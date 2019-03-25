import { Injectable } from '@angular/core';
import { HelpEntry } from './help-entry.model';
import { HelpEntries } from './help-entries.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { HelpItem } from './help-item.model';

@Injectable({
  providedIn: 'root'
})
export class HelpEntriesService {

  constructor() { }

  ServeMockHelpEntry(): HelpEntries{
    return {
      id: 1,
      title: "Mock Entry",
      description: "This is a mock help entry for testing and development purposes",
      entries: [
        {
          id: 1,
          title: "Mock Entry 1",
          values: [
            {value: "Step 1: <span class='greenText'>This</span> is the first step.", type: "normal"} as HelpItem, 
            {value: "Step 2: This is the second step.", type: "warning"} as HelpItem, 
            {value: "Step 3: This is the third step.", type: "danger"} as HelpItem],
          subEntries:[]
        } as HelpEntry,
        {
          id: 2,
          title: "Mock Entry 2",
          values: [
            {value: "Step 1: This is the first step.", type: "normal"} as HelpItem, 
            {value: "Step 2: This is the second step.", type: "warning"} as HelpItem, 
            {value: "Step 3: This is the third step.", type: "danger"} as HelpItem],
          subEntries:[]
        } as HelpEntry,
        {
          id: 3,
          title: "Mock Entry 3",
          values: [
            {value: "Step 1: This is the first step.", type: "normal"} as HelpItem, 
            {value: "Step 2: This is the second step.", type: "warning"} as HelpItem, 
            {value: "Step 3: This is the third step.", type: "danger"} as HelpItem],
          subEntries:[]
        } as HelpEntry
      ]
    } as HelpEntries;
  }
}
