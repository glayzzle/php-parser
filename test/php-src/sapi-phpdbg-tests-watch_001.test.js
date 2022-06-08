// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/watch_001.phpt
  it("Test simple recursive watchpoint", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$b = [$a];\nunset($b);\n$b = 2;\n")).toMatchSnapshot();
  });
});
