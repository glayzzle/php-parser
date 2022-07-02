// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_004.phpt
  it("Testing declare statement with several type values", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding = 1);\ndeclare(encoding = 1123131232131312321);\ndeclare(encoding = M_PI);\nprint 'DONE';\n?>")).toMatchSnapshot();
  });
});
