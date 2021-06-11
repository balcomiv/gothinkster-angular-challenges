import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { CardComponent } from './card.component';

export default {
  title: '100 Angular Challenges/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [],
    }),
  ],
} as Meta;

const template: Story<CardComponent> = (args: CardComponent) => ({
  template: `
    <app-card iconClasses="fas fa-info-circle" title="Card" subtitle="Components">
        <p footer>Footer Content</p>
        <p body>Body Content</p>
    </app-card>
`,
  props: {
    ...args,
  },
});

export const card: Story<CardComponent> = template.bind({});
card.args = {};
