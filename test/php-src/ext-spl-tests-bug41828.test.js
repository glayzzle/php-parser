// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug41828.phpt
  it("Bug #41828 (Segfault if extended constructor of RecursiveIterator doesn't call its parent)", function () {
    expect(parser.parseCode("<?php\nclass foo extends RecursiveIteratorIterator {\n    public function __construct($str) {\n    }\n    public function bar() {\n    }\n}\n$foo = new foo(\"This is bar\");\necho $foo->bar();\n?>")).toMatchSnapshot();
  });
});
