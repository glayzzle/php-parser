// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62904.phpt
  it("Bug #62904 (Crash when cloning an object which inherits SplFixedArray)", function () {
    expect(parser.parseCode("<?php\nclass foo extends SplFixedArray {\n    public function __construct($size) {\n    }\n}\n$x = new foo(2);\n$z = clone $x;\necho \"No crash.\";\n?>")).toMatchSnapshot();
  });
});
