// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_array.phpt
  it("yielding values from an array", function () {
    expect(parser.parseCode("<?php\nfunction from() {\n    yield 0;\n    yield from []; // must not yield anything\n    yield from [1,2];\n}\nfunction gen() {\n    yield from from();\n}\nforeach(gen() as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
