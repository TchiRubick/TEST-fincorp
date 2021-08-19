import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import ClaimSection from '../ClaimSection';

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<ClaimSection />, div);
});

it('as expected snapshot 1', () => {
  const tree = renderer.create(<ClaimSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
