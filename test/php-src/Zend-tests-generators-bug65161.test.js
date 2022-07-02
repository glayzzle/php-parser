// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug65161.phpt
  it("Bug #65161: Generator + autoload + syntax error = segfault", function () {
    expect(parser.parseCode("<?php\nfunction autoload() {\n    foo();\n}\nspl_autoload_register('autoload');\nfunction testGenerator() {\n    new SyntaxError('param');\n    yield;\n}\nforeach (testGenerator() as $i);\n?>")).toMatchSnapshot();
  });
});
