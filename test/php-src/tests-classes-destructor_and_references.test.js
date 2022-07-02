// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_and_references.phpt
  it("ZE2 Destructing and references", function () {
    expect(parser.parseCode("<?php\nclass test1 {public $x;};\nclass test2 {public $x;};\nclass test3 {public $x;};\nclass test4 {public $x;};\n$o1 = new test1;\n$o2 = new test2;\n$o3 = new test3;\n$o4 = new test4;\n$o3->x = &$o4;\n$r1 = &$o1;\nclass once {}\n$o = new once;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
