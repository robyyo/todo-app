import React from 'react';

import Nav from '../../../components/atoms/Nav/Nav';

export default {
  title: 'Components/Atoms/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const SignedIn = Template.bind({});
SignedIn.args = {
  Signed_In: false,
};