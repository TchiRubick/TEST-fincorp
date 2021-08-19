import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import MainButton from '../MainButton';

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<MainButton>test</MainButton>, div);
});

it('as expected snapshot', () => {
  const tree = renderer.create(<MainButton>test</MainButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
