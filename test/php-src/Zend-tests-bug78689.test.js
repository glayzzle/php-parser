// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78689.phpt
  it("Bug #78689: Closure::fromCallable() doesn't handle [Closure, '__invoke']", function () {
    expect(parser.parseCode("<?php\n$a = [function () { echo \"123\\n\"; }, '__invoke'];\n$a();\n$b = Closure::fromCallable($a);\n$b();\n?>")).toMatchSnapshot();
  });
});
