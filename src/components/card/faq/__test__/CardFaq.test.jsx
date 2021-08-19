import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import CardFaq from '../CardFaq';

const contents = [
  { title: 'title', children: 'children' },
];

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<CardFaq contents={contents} />, div);
});

it('as expected snapshot', () => {
  const tree = renderer.create(<CardFaq contents={contents} />).toJSON();
  expect(tree).toMatchSnapshot();
});
