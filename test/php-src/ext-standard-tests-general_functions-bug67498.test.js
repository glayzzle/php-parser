// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug67498.phpt
  it("phpinfo() Type Confusion Information Leak Vulnerability", function () {
    expect(parser.parseCode("<?php\n$PHP_SELF = 1;\nphpinfo(INFO_VARIABLES);\n?>")).toMatchSnapshot();
  });
});
