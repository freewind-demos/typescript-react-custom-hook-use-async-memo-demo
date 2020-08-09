import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'

const x: React.ReactNode = Hello;
const y: React.ReactNode = <Hello/>;
const z: React.ReactNode = 123;

ReactDOM.render(
  <Hello/>,
  document.body
)
