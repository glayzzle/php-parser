// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/wordwrap_memory_limit_win32.phpt
  it("No overflow should occur during the memory_limit check for wordwrap()", function () {
    expect(parser.parseCode("<?php\n$str = str_repeat('x', 65534);\n$str2 = str_repeat('x', 65535);\nwordwrap($str, 1, $str2);\n?>")).toMatchSnapshot();
  });
});
