// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const13.phpt
  it("Bug GH-7757 (Multi-inherited final constant causes fatal error)", function () {
    expect(parser.parseCode("<?php\ninterface EntityInterface {\n    final public const TEST = 'this';\n}\ninterface KeyInterface extends EntityInterface {\n}\ninterface StringableInterface extends EntityInterface {\n}\nclass SomeTestClass implements KeyInterface, StringableInterface {\n}\n?>")).toMatchSnapshot();
  });
});
