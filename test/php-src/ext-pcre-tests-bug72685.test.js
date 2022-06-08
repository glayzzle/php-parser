// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug72685.phpt
  it("Bug #72685: Same string is UTF-8 validated repeatedly", function () {
    expect(parser.parseCode("<?php\n$input_size = 64 * 1024;\n$str = str_repeat('a', $input_size);\n$start = microtime(true);\n$pos = 0;\nwhile (preg_match('/\\G\\w/u', $str, $m, 0, $pos)) ++$pos;\n$end = microtime(true);\nvar_dump(($end - $start) < 0.5); // large margin, more like 0.05 in debug build\n?>")).toMatchSnapshot();
  });
});
