import React from 'react';

import { ExampleHeader } from './ExampleHeader';

export default {
  title: 'Example/ExampleHeader',
  component: ExampleHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <ExampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggedInAgain = Template.bind({});
LoggedInAgain.args = {
  user: {
    name: 'Logged Again'
  }
};