// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/watch_003.phpt
  it("Test simple watchpoint with replace", function () {
    expect(parser.parseCode("<?php\n$a = [];\n$a[0] = 1;\n$a[0] = 2;\n$a = [0 => 3, 1 => 4];\n")).toMatchSnapshot();
  });
});
