import React, { propTypes } from 'react';
import Poem from './Poem';

const poem = {
  title: 'Foo bar',
  author: 'Vivek Zizek',
  lines: ['hello', 'world'],
  lineCount: 2,
};

const RandomPoem = () => (
  <Poem poem={poem} />
);

export default RandomPoem;
