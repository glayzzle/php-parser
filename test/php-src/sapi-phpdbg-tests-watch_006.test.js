// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/watch_006.phpt
  it("Test multiple watch elements pointing to the same watchpoint", function () {
    expect(parser.parseCode("<?php\n$a = [0];\n$a[0] = 1;\n$b = &$a;\n$a[0] = 2;\n$a[1] = 3;\n$c = [1];\n$b = &$c;\n")).toMatchSnapshot();
  });
});
