// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_003.phpt
  it("Testing declare statement with several type values", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding = 1);\ndeclare(encoding = 11111111111111);\ndeclare(encoding = M_PI);\nprint 'DONE';\n?>")).toMatchSnapshot();
  });
});
