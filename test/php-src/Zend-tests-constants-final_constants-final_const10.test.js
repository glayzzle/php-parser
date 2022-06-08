// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const10.phpt
  it("Interface constants inherited from other interfaces can be redeclared", function () {
    expect(parser.parseCode("<?php\ninterface I1\n{\n    const C = 1;\n}\ninterface I2\n{\n    const C = 2;\n}\ninterface I3 extends I1, I2\n{\n    const C = 3;\n}\n?>")).toMatchSnapshot();
  });
});
