window.testGlobals = {
  React: window.React,
  Component: window.React.Component,
  PropTypes: window.PropTypes,
  expect: window.weknowhow.expect
    .clone()
    .use(window.unexpected.dom)
    .use(window.unexpectedReaction),
  mount: window.unexpectedReaction.mount,
  unmount: window.unexpectedReaction.unmount,
  Ignore: window.unexpectedReaction.Ignore,
  simulate: window.unexpectedReaction.simulate
};
