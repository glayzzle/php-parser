// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/settype_double.phpt
  it("casting different variables to double using settype()", function () {
    expect(parser.parseCode("<?php\n$r = fopen(__FILE__, \"r\");\nclass test {\n    function  __toString() {\n        return \"10\";\n    }\n}\n$o = new test;\n$vars = array(\n    \"string\",\n    \"8754456\",\n    \"\",\n    \"\\0\",\n    9876545,\n    0.10,\n    array(),\n    array(1,2,3),\n    false,\n    true,\n    NULL,\n    $r,\n    $o\n);\nforeach ($vars as $var) {\n    settype($var, \"double\");\n    var_dump($var);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
