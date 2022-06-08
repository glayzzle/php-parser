// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39017.phpt
  it("Bug #39017 (foreach(($obj = new myClass) as $v); echo $obj; segfaults)", function () {
    expect(parser.parseCode("<?php\nclass A {}\nforeach(($a=(object)new A()) as $v);\nvar_dump($a); // UNKNOWN:0\n?>")).toMatchSnapshot();
  });
});
