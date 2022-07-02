// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/006.phpt
  it("serialize()/unserialize() with exotic letters", function () {
    expect(parser.parseCode("<?php\n    $������ = array('������' => '������');\n    class �berK��li��\n    {\n        public $��������ber = '������';\n    }\n    $foo = new �berk��li��();\n    var_dump(serialize($foo));\n    var_dump(unserialize(serialize($foo)));\n    var_dump(serialize($������));\n    var_dump(unserialize(serialize($������)));\n?>")).toMatchSnapshot();
  });
});
