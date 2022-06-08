// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug42737.phpt
  it("Bug #42737 (preg_split('//u') triggers a E_NOTICE with newlines)", function () {
    expect(parser.parseCode("<?php\n$string = chr(13).chr(10);\n$array = preg_split('//u', $string, - 1, PREG_SPLIT_NO_EMPTY);\nvar_dump(array_map('ord', $array));\n?>")).toMatchSnapshot();
  });
});
