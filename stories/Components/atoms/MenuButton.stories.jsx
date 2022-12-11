import React from 'react';

import MenuButton from '../../../components/atoms/MenuButton/MenuButton';

export default {
  title: 'Components/Atoms/MenuButton',
  component: MenuButton,
  artTypes: {
    open: {
      options: ['open', 'closed'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <MenuButton {...args} />;

export const Open = Template.bind({});
Open.args = {
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  open: false,
};
