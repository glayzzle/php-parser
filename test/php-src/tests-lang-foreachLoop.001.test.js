// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.001.phpt
  it("Foreach loop tests - basic loop with just value and key => value.", function () {
    expect(parser.parseCode("<?php\n$a = array(\"a\",\"b\",\"c\");\nforeach ($a as $v) {\n    var_dump($v);\n}\nforeach ($a as $k => $v) {\n    var_dump($k, $v);\n}\n//check key and value after the loop.\nvar_dump($k, $v);\necho \"\\n\";\n//Dynamic array\nforeach (array(\"d\",\"e\",\"f\") as $v) {\n    var_dump($v);\n}\nforeach (array(\"d\",\"e\",\"f\") as $k => $v) {\n    var_dump($k, $v);\n}\n//check key and value after the loop.\nvar_dump($k, $v);\necho \"\\n\";\n//Ensure counter is advanced during loop\n$a=array(\"a\",\"b\",\"c\");\nforeach ($a as $v);\nvar_dump(current($a));\n$a=array(\"a\",\"b\",\"c\");\nforeach ($a as &$v);\nvar_dump(current($a));\n?>")).toMatchSnapshot();
  });
});
