// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24054.phpt
  it("Bug #24054 (Assignment operator *= broken)", function () {
    expect(parser.parseCode("<?php\ndefine('LONG_MAX', is_int(5000000000)? 9223372036854775807 : 0x7FFFFFFF);\ndefine('LONG_MIN', -LONG_MAX - 1);\nprintf(\"%d,%d,%d,%d\\n\",is_int(LONG_MIN  ),is_int(LONG_MAX  ),\n                       is_int(LONG_MIN-1),is_int(LONG_MAX+1));\n$i = LONG_MAX;\n$j = $i * 1001;\n$i *= 1001;\nvar_dump($i === $j);\n?>")).toMatchSnapshot();
  });
});
