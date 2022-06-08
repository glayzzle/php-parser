// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/retry_limit.phpt
  it("Oniguruma retry limit", function () {
    expect(parser.parseCode("<?php\n$regex = 'A(B|C+)+D|AC+X';\n$str = 'ACCCCCCCCCCCCCCCCCCCX';\nvar_dump(mb_ereg($regex, $str));\nini_set('mbstring.regex_retry_limit', '100000');\nvar_dump(mb_ereg($regex, $str));\n?>")).toMatchSnapshot();
  });
});
