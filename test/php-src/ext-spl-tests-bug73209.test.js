// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73209.phpt
  it("Bug #73209: RecursiveArrayIterator does not iterate object properties", function () {
    expect(parser.parseCode("<?php\nclass hello {\n  public $props = array();\n  function __construct() {\n    $this->props = ['hello' => 5, 'props' => ['keyme' => ['test' => 5]]];\n  }\n}\n$data = new hello();\n$iterator = new RecursiveIteratorIterator(new RecursiveArrayIterator($data), RecursiveIteratorIterator::SELF_FIRST);\necho \"Expect to see all keys in ->props here: \\n\";\nforeach($iterator as $k=>$v) {\n    echo $k . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
