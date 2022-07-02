// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81070.phpt
  it("Bug #81070\tSetting memory limit to below current usage", function () {
    expect(parser.parseCode("<?php\n$a = str_repeat(\"0\", 5 * 1024 * 1024);\nini_set(\"memory_limit\", \"3M\");\n?>")).toMatchSnapshot();
  });
});
