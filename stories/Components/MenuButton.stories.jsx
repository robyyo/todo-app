import React from 'react';

import MenuButton from '../../components/MenuButton/MenuButton';

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MenuButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
