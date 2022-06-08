// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug26927.phpt
  it("Bug #26927 (preg_quote() does not escape \\0)", function () {
    expect(parser.parseCode("<?php\n    $str = \"a\\000b\";\n    $str_quoted = preg_quote($str);\n    var_dump(preg_match(\"!{$str_quoted}!\", $str), $str_quoted);\n?>")).toMatchSnapshot();
  });
});
