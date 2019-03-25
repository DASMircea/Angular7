import { HelpItem } from './help-item.model';

export class HelpEntry {
    id: number;
    title: string;
    values: HelpItem[];
    subEntries: HelpEntry[];
}
