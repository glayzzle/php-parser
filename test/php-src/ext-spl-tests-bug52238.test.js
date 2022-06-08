// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug52238.phpt
  it("Bug #52238 - Crash when an Exception occurred in iterator_to_array", function () {
    expect(parser.parseCode("<?php\nclass Foo implements IteratorAggregate\n{\n    public function bar() {\n        throw new Exception;\n    }\n    public function getIterator(): Traversable {\n        return new ArrayIterator($this->bar());\n    }\n}\nvar_dump(iterator_to_array(new Foo));\n?>")).toMatchSnapshot();
  });
});
