// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_variation1.phpt
  it("Test preg_match() function : variation", function () {
    expect(parser.parseCode("<?php\n/* Function is implemented in ext/pcre/php_pcre.c */\n//test passing in the same variable where 1 is by value, the other is a different\n//type and by reference so should be updated to the new type.\n$string = \"-1\";\npreg_match('/[\\-\\+]?[0-9\\.]*/', $string, $string);\nvar_dump($string);\n?>")).toMatchSnapshot();
  });
});
