// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80404.phpt
  it("Bug #80404: Incorrect range inference result when division results in float", function () {
    expect(parser.parseCode("<?php\n$n = 63;\nvar_dump((int) ($n / 120 * 100));\n?>")).toMatchSnapshot();
  });
});
