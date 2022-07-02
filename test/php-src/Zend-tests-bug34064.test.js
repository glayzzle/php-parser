// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34064.phpt
  it("Bug #34064 (arr[] as param to function in class gives invalid opcode)", function () {
    expect(parser.parseCode("<?php\nclass XmlTest {\n    function test_ref(&$test)\n    {\n        $test = \"ok\";\n    }\n    function test($test)\n    {\n    }\n    function run()\n    {\n        $ar = array();\n        $this->test_ref($ar[]);\n        var_dump($ar);\n        $this->test($ar[]);\n    }\n}\n$o = new XmlTest();\n$o->run();\n?>")).toMatchSnapshot();
  });
});
