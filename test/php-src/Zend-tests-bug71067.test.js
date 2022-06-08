// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71067.phpt
  it("Bug #71067 (Local object in class method stays in memory for each call)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function test(){\n        $arr = (object) [\n            'children' => []\n        ];\n        $arr->children[] = 1;\n        return $arr;\n    }\n}\n$o = new Test();\n$o->test();\nprint_r($o->test());\n?>")).toMatchSnapshot();
  });
});
