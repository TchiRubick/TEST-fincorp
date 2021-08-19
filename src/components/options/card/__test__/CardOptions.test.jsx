import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import CardOptions from '../CardOptions';
import img from '../../../../assets/img/logo.png';

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<CardOptions title="test" color="green" image={img}>test</CardOptions>, div);
});

it('as expected snapshot 1', () => {
  const tree = renderer.create(<CardOptions title="test" color="green" image={img}>test</CardOptions>).toJSON();
  expect(tree).toMatchSnapshot();
});
