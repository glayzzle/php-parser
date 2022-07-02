// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/clone_002.phpt
  it("ZE2 object cloning, 2", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public $p1 = 1;\n    public $p2 = 2;\n    public $p3;\n    public function __clone() {\n    }\n};\n$obj = new test;\n$obj->p2 = 'A';\n$obj->p3 = 'B';\n$copy = clone $obj;\n$copy->p3 = 'C';\necho \"Object\\n\";\nvar_dump($obj);\necho \"Clown\\n\";\nvar_dump($copy);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
