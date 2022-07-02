// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_001.phpt
  it("First Class Callable from Internal", function () {
    expect(parser.parseCode("<?php\n$sprintf = sprintf(...);\necho $sprintf(\"Hello %s\", \"World\");\n?>")).toMatchSnapshot();
  });
});
