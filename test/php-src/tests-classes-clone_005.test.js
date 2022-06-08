// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/clone_005.phpt
  it("ZE2 object cloning, 5", function () {
    expect(parser.parseCode("<?php\nabstract class base {\n  public $a = 'base';\n  // disallow cloning once forever\n  final protected function __clone() {}\n}\nclass test extends base {\n  // reenabling should fail\n  public function __clone() {}\n}\n?>")).toMatchSnapshot();
  });
});
