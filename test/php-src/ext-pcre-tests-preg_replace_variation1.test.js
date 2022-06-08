// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_variation1.phpt
  it("Test preg_replace() function : variation both arguments are arrays", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Testing preg_replace when the regex and the replacement are both arrays.\n*/\n$string = 'This is a string. It contains numbers (0-9) as well as parentheses and some other things!';\n$new_string = preg_replace(array('/\\b\\w{1}s/', '/(\\d{1})-(\\d{1})/', '/[\\(!\\)]/'), array('test', '$1 to $2', '*'), $string);\nprint $new_string;\n?>")).toMatchSnapshot();
  });
});
