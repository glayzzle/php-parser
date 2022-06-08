// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_024.phpt
  it("Closure 024: Clone the Closure object", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$c = function($add) use(&$a) { return $a+$add; };\n$cc = clone $c;\necho $c(10).\"\\n\";\necho $cc(10).\"\\n\";\n$a++;\necho $c(10).\"\\n\";\necho $cc(10).\"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
