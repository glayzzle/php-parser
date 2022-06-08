// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__set__get_005.phpt
  it("ZE2 __set() and __get()", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    protected $x;\n    function __get($name) {\n        echo __METHOD__ . \"\\n\";\n        if (isset($this->x[$name])) {\n            return $this->x[$name];\n        }\n        else\n        {\n            return NULL;\n        }\n    }\n    function __set($name, $val) {\n        echo __METHOD__ . \"\\n\";\n        $this->x[$name] = $val;\n    }\n}\nclass AutoGen\n{\n    protected $x;\n    function __get($name) {\n        echo __METHOD__ . \"\\n\";\n        if (!isset($this->x[$name])) {\n            $this->x[$name] = new Test();\n        }\n        return $this->x[$name];\n    }\n    function __set($name, $val) {\n        echo __METHOD__ . \"\\n\";\n        $this->x[$name] = $val;\n    }\n}\n$foo = new AutoGen();\n$foo->bar->baz = \"Check\";\nvar_dump($foo->bar);\nvar_dump($foo->bar->baz);\n?>")).toMatchSnapshot();
  });
});
