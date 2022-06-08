// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug76536.phpt
  it("Bug #76536 (PHP crashes with core dump when throwing exception in error handler)", function () {
    expect(parser.parseCode("<?php\nclass SomeConstants {const SOME_CONSTANT = \"0foo\" % 5; }\nfunction handleError() {throw new ErrorException();}\nset_error_handler('handleError');\nset_exception_handler('handleError');\n$r = new \\ReflectionClass(SomeConstants::class);\n$r->getConstants();\n?>")).toMatchSnapshot();
  });
});
