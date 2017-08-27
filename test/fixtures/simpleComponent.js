export default function simpleComponent() {
  this.doSomething = function() { /* ... */ }
  this.doSomethingElse = function() { /* ... */ }

  // after initializing the component
  this.after('initialize', function() {
    this.on('click', this.doSomething);
    this.on('mouseover', this.doSomethingElse);
  });
}