// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakrefs_006.phpt
  it("WeakReference overwriting existing value", function () {
    expect(parser.parseCode("<?php\nclass HasDtor {\n    public function __destruct() {\n        echo \"In destruct\\n\";\n        global $w, $all;\n        for ($i = 0; $i < 10; $i++) {\n            $v = new stdClass();\n            $all[] = $v;\n            $w[$v] = $i;\n        }\n    }\n}\n$all = [];\n$w = new WeakMap();\n$o = new stdClass();\n$w[$o] = new HasDtor();\n$w[$o] = 123;\nvar_dump($w);\n?>")).toMatchSnapshot();
  });
});
