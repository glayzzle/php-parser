// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interfaces_002.phpt
  it("ZE2 interface with an unimplemented method", function () {
    expect(parser.parseCode("<?php\ninterface ThrowableInterface {\n    public function getMessage();\n    public function getErrno();\n}\nclass Exception_foo implements ThrowableInterface {\n    public $foo = \"foo\";\n    public function getMessage() {\n        return $this->foo;\n    }\n}\n// this should die -- Exception class must be abstract...\n$foo = new Exception_foo;\necho \"Message: \" . $foo->getMessage() . \"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
