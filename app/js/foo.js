window.Foo = (function() {

  function Foo() {
    this.plusOne = function (num) {
      return num + 1;
    };

    this.sortArray = function (unsorted) {
      var sorted = unsorted.slice().sort();
      return sorted;
    };

    this.hasValue = function (array, value) {
      return (array.indexOf(value) >= 0);
    };

  }

  Foo.prototype = {

  };

  // Why isn't it Foo.prototype.greet?
  Foo.greet = function (name) {
    return 'Hello, ' + name + '!';
  };

  return Foo;

})();
