// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/php_uname_error.phpt
  it("Test php_uname() function -  error conditions - pass function incorrect arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing php_uname() - error test\\n\";\necho \"\\n-- Testing php_uname() function with invalid mode --\\n\";\n// am invalid mode should result in same o/p as mode 'a'\nvar_dump( php_uname('z') == php_uname('z') );\n?>")).toMatchSnapshot();
  });
});
