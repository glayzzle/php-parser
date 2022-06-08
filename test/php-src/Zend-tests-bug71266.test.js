// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71266.phpt
  it("Bug #71266 (Missing separation of properties HT in foreach etc)", function () {
    expect(parser.parseCode("<?php\n$one = 1;\n$two = 2;\n$arr = ['foo' => $one, 'bar' => $two];\n$obj = (object) $arr;\nforeach ($obj as $val) {\n    var_dump($val);\n    $obj->bar = 42;\n}\n$arr = ['foo' => $one, 'bar' => $two];\n$obj = (object) $arr;\nnext($obj);\nvar_dump(current($arr));\n?>")).toMatchSnapshot();
  });
});
