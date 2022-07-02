// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_iterator_agregate.phpt
  it("yield from with an IteratorAggregate", function () {
    expect(parser.parseCode("<?php\nclass foo implements \\IteratorAggregate {\n  public $prop = 1;\n  function getIterator(): Traversable {\n    var_dump($this->prop);\n    yield;\n  }\n}\n(function(){\n  yield from new foo;\n})()->next();\n?>")).toMatchSnapshot();
  });
});
