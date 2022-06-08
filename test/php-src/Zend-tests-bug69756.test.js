// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69756.phpt
  it("Fixed bug #69756 (Fatal error: Nesting level too deep - recursive dependency? with ===).", function () {
    expect(parser.parseCode("<?php\n$arr = range(1, 2);\nforeach($arr as &$item ) {\n    var_dump($arr === array(1, 2));\n}\n?>")).toMatchSnapshot();
  });
});
