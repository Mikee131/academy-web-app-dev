import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), div);
  ReactDOM.unmountComponentAtNode(div);
});