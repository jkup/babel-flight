const babylon = require('babylon');
const traverse = require('babel-traverse');

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
    if (path.isIdentifier({ name: "on" })) {
      console.log(path);
    }
  }
});