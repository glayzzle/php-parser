// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__set__get_001.phpt
  it("ZE2 __set() and __get()", function () {
    expect(parser.parseCode("<?php\nclass setter {\n    public $n;\n    public $x = array('a' => 1, 'b' => 2, 'c' => 3);\n    function __get($nm) {\n        echo \"Getting [$nm]\\n\";\n        if (isset($this->x[$nm])) {\n            $r = $this->x[$nm];\n            echo \"Returning: $r\\n\";\n            return $r;\n        }\n        else {\n            echo \"Nothing!\\n\";\n        }\n    }\n    function __set($nm, $val) {\n        echo \"Setting [$nm] to $val\\n\";\n        if (isset($this->x[$nm])) {\n            $this->x[$nm] = $val;\n            echo \"OK!\\n\";\n        }\n        else {\n            echo \"Not OK!\\n\";\n        }\n    }\n}\n$foo = new Setter();\n// this doesn't go through __set()... should it?\n$foo->n = 1;\n// the rest are fine...\n$foo->a = 100;\n$foo->a++;\n$foo->z++;\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
