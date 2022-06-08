// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/cast_to_array.phpt
  it("casting different variables to array", function () {
    expect(parser.parseCode("<?php\n$r = fopen(__FILE__, \"r\");\nclass test {\n    private $var1 = 1;\n    public $var2 = 2;\n    protected $var3 = 3;\n    function  __toString() {\n        return \"10\";\n    }\n}\n$o = new test;\n$vars = array(\n    \"string\",\n    \"\",\n    \"\\0\",\n    \"8754456\",\n    9876545,\n    0.10,\n    array(),\n    array(1,2,3),\n    false,\n    true,\n    NULL,\n    $r,\n    $o\n);\nforeach ($vars as $var) {\n    $tmp = (array)$var;\n    var_dump($tmp);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
