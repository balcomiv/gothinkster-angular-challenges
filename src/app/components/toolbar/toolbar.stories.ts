import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ToolbarComponent } from './toolbar.component';

export default {
  title: '100 Angular Challenges / Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToolbarComponent],
      imports: [],
    }),
  ],
} as Meta;

const template: Story<ToolbarComponent> = (args: ToolbarComponent) => ({
  template: `
  <app-toolbar [title]="'100 Angular Challenges'">
    <ul>
      <li>Component</li>
      <li>Directives</li>
      <li>Services</li>
      <li>Pipes</li>
      <li>Other</li>
    </ul>
  </app-toolbar>
`,
  props: {
    ...args,
  },
});

export const toolbar: Story<ToolbarComponent> = template.bind({});
toolbar.args = {};
