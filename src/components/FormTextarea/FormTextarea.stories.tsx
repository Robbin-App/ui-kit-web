import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { FormTextarea, IFormTextareaProps } from './index';

export default {
  title: 'Components/Form Textarea',
  component: FormTextarea,
} as Meta;

const Template: Story<IFormTextareaProps> = (args) => {
  const [value, setValue] = useState<string>(`${args.value}`);
  return (
    <FormTextarea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const value =
  "The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with JSDOM/Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.\n" +
  '\n' +
  'The core library has been wrapped to provide ergonomic APIs for several frameworks, including React, Angular, and Vue. There is also a plugin to use testing-library queries for end-to-end tests in Cypress and an implementation for React Native.';

export const Default = Template.bind({});
Default.args = {
  label: 'Textarea',
  formId: 'text-area-id',
  value: '',
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Textarea',
  formId: 'text-area-id',
  value,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Textarea',
  formId: 'text-area-id',
  value,
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Textarea',
  formId: 'text-area-id',
  value,
  disabled: true,
};
