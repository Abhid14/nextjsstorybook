import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from './MyComponent';

storiesOf('MyComponent', module)
  .add('default', () => <MyComponent />)
  .add('with a custom prop', () => <MyComponent customProp="Custom value" />);
