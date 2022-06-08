// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_094.phpt
  it("Type group use declarations should not allow override on inner items", function () {
    expect(() => parser.parseCode("<?php\n// should throw syntax errors\nuse const Foo\\Bar\\{\n    A,\n    const B,\n    function C\n};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
