// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/methods-on-non-objects.phpt
  it("Method calls on non-objects raise recoverable errors", function () {
    expect(parser.parseCode("<?php\n$x= null;\n$x->method();\necho \"Should not get here!\\n\";\n?>")).toMatchSnapshot();
  });
});
