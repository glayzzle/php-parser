// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52060.phpt
  it("Bug #52060 (Memory leak when passing a closure to method_exists())", function () {
    expect(parser.parseCode("<?php\n$closure = function($a) { echo $a; };\nvar_dump(method_exists($closure, '__invoke')); // true\n?>")).toMatchSnapshot();
  });
});
