// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_003.phpt
  it("Test to ensure ::class is still reserved in obj scope", function () {
    expect(parser.parseCode("<?php\nclass Obj\n{\n    const CLASS = 'class';\n}\n?>")).toMatchSnapshot();
  });
});
