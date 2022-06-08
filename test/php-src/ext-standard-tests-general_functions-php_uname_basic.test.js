// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/php_uname_basic.phpt
  it("Test php_uname() function - basic test", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing php_uname() - basic test\\n\";\nvar_dump(php_uname());\necho \"\\n-- Try all the defined mode's --\\n\";\nvar_dump(php_uname('a'));\nvar_dump(php_uname('s'));\nvar_dump(php_uname('n'));\nvar_dump(php_uname('r'));\nvar_dump(php_uname('v'));\nvar_dump(php_uname('m'));\n?>")).toMatchSnapshot();
  });
});
