// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/parse_ini_basic.phpt
  it("parse_ini_file() tests", function () {
    expect(parser.parseCode("<?php\n$ini_file = __DIR__.\"/parse_ini_basic.data\";\ndefine('TEST_CONSTANT', 'this_is_test_constant');\nvar_dump(parse_ini_file($ini_file, 1));\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
