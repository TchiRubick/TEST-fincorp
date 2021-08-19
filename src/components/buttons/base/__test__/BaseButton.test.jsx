import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import BaseButton from '../BaseButton';

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<BaseButton>test</BaseButton>, div);
});

it('as expected snapshot', () => {
  const tree = renderer.create(<BaseButton>test</BaseButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
