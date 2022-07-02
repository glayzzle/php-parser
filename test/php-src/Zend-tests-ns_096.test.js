// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_096.phpt
  it("Group use declaration list should not contain leading separator", function () {
    expect(() => parser.parseCode("<?php\nuse Foo\\Bar\\{\\Baz};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
