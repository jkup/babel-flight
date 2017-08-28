const babylon = require('babylon');
import traverse from 'babel-traverse';

const code = `function inbox() {
  this.doSomething = function() { /* ... */ }
  this.doSomethingElse = function() { /* ... */ }

  // after initializing the component
  this.after('initialize', function() {
    this.on('click', this.doSomething);
    this.on('mouseover', this.doSomethingElse);
  });
}`;

const ast = babylon.parse(code);

traverse(ast, {
  enter(path) {
    if (path.node.type === 'arguments' && path.node.value === 'mouseover') {
      console.log(path);
    }
  }
});
