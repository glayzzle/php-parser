// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_quote_basic.phpt
  it("Test preg_quote() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n$string_before = '/this *-has \\ metacharacters^ in $';\nprint \"\\$string_before looks like: $string_before\\n\"; //$string_before is printed as is written\n$string_after = preg_quote($string_before, '/');\nprint \"\\$string_after looks like: $string_after, with metacharacters and / (set as delimiter) escaped\\n\"; //$string_after is printed with metacharacters escaped.\n$string1 = 'testing - /this *-has \\ metacharacters^ in $ should   work';\nvar_dump(preg_match('/^[tT]\\w{6} - ' . preg_quote($string_before, '/') . ' [a-z]*\\s*work$/', $string1, $matches1));\nvar_dump($matches1);\n?>")).toMatchSnapshot();
  });
});
