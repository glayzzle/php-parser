// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug26737.phpt
  it("Bug #26737 (Protected and private variables are not saved on serialization when a user defined __sleep is used)", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    private $private = 'private';\n    protected $protected = 'protected';\n    public $public = 'public';\n    public function __sleep()\n    {\n        return array('private', 'protected', 'public', 'no_such');\n    }\n}\n$foo = new foo();\n$data = serialize($foo);\nvar_dump(str_replace(\"\\0\", '\\0', $data));\n?>")).toMatchSnapshot();
  });
});
