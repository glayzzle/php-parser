// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/clone_004.phpt
  it("ZE2 object cloning, 4", function () {
    expect(parser.parseCode("<?php\nabstract class base {\n  public $a = 'base';\n  // disallow cloning\n  private function __clone() {}\n}\nclass test extends base {\n  public $b = 'test';\n  // re-enable cloning\n  public function __clone() {}\n  public function show() {\n    var_dump($this);\n  }\n}\necho \"Original\\n\";\n$o1 = new test;\n$o1->a = array(1,2);\n$o1->b = array(3,4);\n$o1->show();\necho \"Clone\\n\";\n$o2 = clone $o1;\n$o2->show();\necho \"Modify\\n\";\n$o2->a = 5;\n$o2->b = 6;\n$o2->show();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
