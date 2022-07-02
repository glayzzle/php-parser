// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_001.phpt
  it("Testing declare statement with several type values", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding = 1);\ndeclare(encoding = 112313123213131232100);\ndeclare(encoding = 'utf-8');\ndeclare(encoding = M_PI);\nprint 'DONE';\n?>")).toMatchSnapshot();
  });
});
