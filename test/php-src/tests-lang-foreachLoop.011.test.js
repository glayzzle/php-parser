// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.011.phpt
  it("Changing from an interable type to a non iterable type during the iteration", function () {
    expect(parser.parseCode("<?php\necho \"\\nChange from array to non iterable:\\n\";\n$a = array(1,2,3);\n$b=&$a;\nforeach ($a as $v) {\n    var_dump($v);\n    $b=1;\n}\necho \"\\nChange from object to non iterable:\\n\";\n$a = new stdClass;\n$a->a=1;\n$a->b=2;\n$b=&$a;\nforeach ($a as $v) {\n    var_dump($v);\n    $b='x';\n}\n?>")).toMatchSnapshot();
  });
});
