// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug79363.phpt
  it("Bug #79363 (\\p{L} doesn't work alongside \\p{Arabic} in a character class)", function () {
    expect(parser.parseCode("<?php\n$str = 'lower UPPER';\nvar_dump(preg_replace('/[\\p{L}\\p{Arabic}]/', '0', $str));\nvar_dump(preg_replace('/[^\\p{L}\\p{Arabic}]/', '0', $str));\n?>")).toMatchSnapshot();
  });
});
