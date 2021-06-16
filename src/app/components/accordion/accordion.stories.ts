import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AccordionComponent } from './accordion.component';

export default {
  title: '100 Angular Challenges/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      declarations: [AccordionComponent],
      imports: [],
    }),
  ],
} as Meta;

const template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  template: `
   <app-accordion [items]="items"></app-accordion>
`,
  props: {
    ...args,
  },
});

export const basic: Story<AccordionComponent> = template.bind({});
basic.args = {
  items: [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ],
};

export const insideCard: Story<AccordionComponent> = template.bind({});
insideCard.args = {};
