// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const6.phpt
  it("Final interface constants can be inherited", function () {
    expect(parser.parseCode("<?php\ninterface I\n{\n    final public const X = 1;\n}\nclass C implements I\n{\n}\n?>")).toMatchSnapshot();
  });
});
