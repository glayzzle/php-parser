// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__set__get_004.phpt
  it("ZE2 __set() and __get()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    protected $x;\n    function __get($name) {\n        if (isset($this->x[$name])) {\n            return $this->x[$name];\n        }\n        else\n        {\n            return NULL;\n        }\n    }\n    function __set($name, $val) {\n        $this->x[$name] = $val;\n    }\n}\n$foo = new Test();\n$bar = new Test();\n$bar->baz = \"Check\";\n$foo->bar = $bar;\nvar_dump($bar->baz);\nvar_dump($foo->bar->baz);\n?>")).toMatchSnapshot();
  });
});
