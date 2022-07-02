// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interfaces_001.phpt
  it("ZE2 interfaces", function () {
    expect(parser.parseCode("<?php\ninterface ThrowableInterface {\n    public function getMessage();\n}\nclass Exception_foo implements ThrowableInterface {\n    public $foo = \"foo\";\n    public function getMessage() {\n        return $this->foo;\n    }\n}\n$foo = new Exception_foo;\necho $foo->getMessage() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
