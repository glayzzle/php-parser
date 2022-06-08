// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_split_basic.phpt
  it("Test preg_split() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n$string = 'this is a_list: value1, Test__, string; Hello, world!_(parentheses)';\nvar_dump(preg_split('/[:,;\\(\\)]/', $string, -1, PREG_SPLIT_NO_EMPTY)); //parts of $string separated by : , ; ( or ) are put into an array.\nvar_dump(preg_split('/:\\s*(\\w*,*\\s*)+;/', $string)); //all text between : and ; is removed\nvar_dump(preg_split('/(\\(|\\))/', $string, -1, PREG_SPLIT_DELIM_CAPTURE|PREG_SPLIT_NO_EMPTY)); //all text before (parentheses) is put into first element, ( into second, \"parentheses\" into third and ) into fourth.\nvar_dump(preg_split('/NAME/i', $string)); //tries to find NAME regardless of case in $string (can't split it so just returns how string as first element)\nvar_dump(preg_split('/\\w/', $string, -1, PREG_SPLIT_NO_EMPTY)); //every character (including whitespace) is put into an array element\n?>")).toMatchSnapshot();
  });
});
