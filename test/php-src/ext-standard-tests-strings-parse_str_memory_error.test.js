// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/parse_str_memory_error.phpt
  it("parse_str() should not read uninitialized memory when checking for $this", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    // strlen(\"abcd\") == 4 is relevant\n    parse_str('abcd=1', $array);\n    var_dump($array);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
