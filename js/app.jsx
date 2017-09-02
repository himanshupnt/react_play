import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function MyTitle(props) {
  return ce('div', null, ce('h1', null, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'Game of Thrones' }),
    ce(MyTitle, { title: 'Stranger Things' }),
    ce(MyTitle, { title: 'Rick and Morty' }),
    ce(MyTitle, { title: 'Silicon Valley' })
  );
};
const x = 5;

render(ce(MyFirstComponent), document.getElementById('app'));
