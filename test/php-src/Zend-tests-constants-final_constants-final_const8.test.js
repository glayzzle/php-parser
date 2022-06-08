// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const8.phpt
  it("Class constants cannot be inherited from two different interfaces", function () {
    expect(parser.parseCode("<?php\ninterface I1\n{\n    const C = 1;\n}\ninterface I2\n{\n    const C = 1;\n}\nclass C implements I1, I2\n{\n}\n?>")).toMatchSnapshot();
  });
});
