import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import DetailsOptions from '../DetailsOptions';

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<DetailsOptions title="test">test</DetailsOptions>, div);
});

it('as expected snapshot 1', () => {
  const tree = renderer.create(<DetailsOptions title="test">test</DetailsOptions>).toJSON();
  expect(tree).toMatchSnapshot();
});
