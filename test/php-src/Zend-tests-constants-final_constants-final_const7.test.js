// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/final_constants/final_const7.phpt
  it("Interface constants can be overridden indirectly", function () {
    expect(parser.parseCode("<?php\ninterface I\n{\n    const X = 1;\n}\nclass C implements I {}\nclass D extends C\n{\n    const X = 2;\n}\n?>")).toMatchSnapshot();
  });
});
