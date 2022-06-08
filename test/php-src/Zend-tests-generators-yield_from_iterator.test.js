// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_iterator.phpt
  it("yield from with an (Array)Iterator", function () {
    expect(parser.parseCode("<?php\nfunction g() {\n    yield 1;\n    yield from new ArrayIterator([2, 3, 4]);\n    yield 5;\n}\n$g = g();\nforeach ($g as $yielded) {\n    var_dump($yielded);\n}\n?>")).toMatchSnapshot();
  });
});
