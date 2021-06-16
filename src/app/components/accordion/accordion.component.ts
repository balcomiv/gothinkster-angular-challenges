import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AccordionItem } from './interfaces/accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  //  We should not allow inputs to mutate store data. Good place to try immutable js etc.
  @Input() items: AccordionItem[] = [];

  constructor() {}

  toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
    console.log('===> ', item);
  }
}
