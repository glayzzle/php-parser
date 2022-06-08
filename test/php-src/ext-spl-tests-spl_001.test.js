// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_001.phpt
  it("SPL: iterator_to_array() and iterator_count()", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayObject(array(\"x\"=>1, 1=>2, 3=>3, 4, \"1\"=>5));\n$ar = iterator_to_array($it);\nvar_dump(iterator_count($it));\nprint_r($ar);\nforeach($ar as $v)\n{\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
