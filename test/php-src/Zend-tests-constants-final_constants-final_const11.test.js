// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const11.phpt
  it("Class constants cannot be inherited from both a class and an interface", function () {
    expect(parser.parseCode("<?php\nclass C\n{\n    const C = 1;\n}\ninterface I\n{\n    const C = 1;\n}\nclass C2 extends C implements I\n{\n}\n?>")).toMatchSnapshot();
  });
});
