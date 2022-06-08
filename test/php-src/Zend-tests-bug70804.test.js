// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70804.phpt
  it("Bug #70804 (Unary add on negative zero produces positive zero)", function () {
    expect(parser.parseCode("<?php\nvar_dump(+(-0.0));\nvar_dump(+(float)\"-0\");\n$foo = +(-sin(0));\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
