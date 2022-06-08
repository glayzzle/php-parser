// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/008.phpt
  it("Yield inside arrow functions", function () {
    expect(parser.parseCode("<?php\n// This doesn't make terribly much sense, but it works...\n$fn = fn() => yield 123;\nforeach ($fn() as $val) {\n    var_dump($val);\n}\n$fn = fn() => yield from [456, 789];\nforeach ($fn() as $val) {\n    var_dump($val);\n}\n$fn = fn() => fn() => yield 987;\nforeach ($fn()() as $val) {\n    var_dump($val);\n}\n?>")).toMatchSnapshot();
  });
});
