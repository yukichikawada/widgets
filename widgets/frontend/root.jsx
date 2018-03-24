import React from 'react';
import Clock from './clock';
import Tabs from  './tabs';

const Panes = [
  {title: 'cats',   content: 'are mean'},
  {title: 'people', content: 'are nice'},
  {title: 'dogs',   content: 'are best friends'}
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Tabs panes={Panes} />
      </div>
    );
  }
}

module.exports = Root;
