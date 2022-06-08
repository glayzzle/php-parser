// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mbregex_stack_limit.phpt
  it("Test oniguruma stack limit", function () {
    expect(parser.parseCode("<?php\n$s = str_repeat(' ', 30000);\nini_set('mbstring.regex_stack_limit', 10000);\nvar_dump(mb_ereg('\\\\s+$', $s));\nini_set('mbstring.regex_stack_limit', 30000);\nvar_dump(mb_ereg('\\\\s+$', $s));\nini_set('mbstring.regex_stack_limit', 30001);\nvar_dump(mb_ereg('\\\\s+$', $s));\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
