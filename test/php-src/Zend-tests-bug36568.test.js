// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36568.phpt
  it("Bug #36568 (memory_limit has no effect)", function () {
    expect(parser.parseCode("<?php\nini_set(\"memory_limit\", \"32M\");\necho ini_get(\"memory_limit\");\n?>")).toMatchSnapshot();
  });
});
