// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restore_error_reporting.phpt
  it("Test error_reporting being restored after fatal error during silencing", function () {
    expect(parser.parseCode("<?php\nvar_dump($undef_var);\n@eval('class self {}');\n?>")).toMatchSnapshot();
  });
});
