// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/method_exists.phpt
  it("method_exists() segfaults", function () {
    expect(parser.parseCode("<?php\nclass testclass { function testfunc() { } }\nvar_dump(method_exists('testclass','testfunc'));\nvar_dump(method_exists('testclass','nonfunc'));\n?>")).toMatchSnapshot();
  });
});
