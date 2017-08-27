const babylon = require('babylon');
import traverse from 'babel-traverse';
import simpleComponent from './fixtures/simpleComponent';

const ast = babylon.parse(simpleComponent);

traverse(ast, {
  enter(path) {
    if (
      path.node.type === 'arguments' &&
      path.node.value === 'mouseover'
    ) { console.log(path) }
  }
});