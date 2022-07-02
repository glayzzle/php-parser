// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.004.phpt
  it("Foreach loop tests - using an array element as the $value", function () {
    expect(parser.parseCode("<?php\n$a=array(\"a\", \"b\", \"c\");\n$v=array();\nforeach($a as $v[0]) {\n    var_dump($v);\n}\nvar_dump($a);\nvar_dump($v);\necho \"\\n\";\n$a=array(\"a\", \"b\", \"c\");\n$v=array();\nforeach($a as $k=>$v[0]) {\n    var_dump($k, $v);\n}\nvar_dump($a);\nvar_dump($k, $v);\n?>")).toMatchSnapshot();
  });
});
