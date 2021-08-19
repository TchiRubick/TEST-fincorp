import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import CardPrice from '../CardPrice';

const contents = ['test content'];

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');
  ReactDom.render(<CardPrice color="green" title="test" price={1} contents={contents} off={10} sticker />, div);
});

it('as expected snapshot 1', () => {
  const tree = renderer.create(<CardPrice color="green" title="test" price={1} contents={contents} off={10} sticker />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('as expected snapshot 2', () => {
  const tree = renderer.create(<CardPrice color="green" title="test" price={1} contents={contents} />).toJSON();
  expect(tree).toMatchSnapshot();
});
