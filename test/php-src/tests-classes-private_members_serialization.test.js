// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_members_serialization.phpt
  it("Verifies that it is possible to return private member names of parent classes in __sleep", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    private $private = 'private';\n    protected $protected = 'protected';\n    public $public = 'public';\n}\nclass bar extends foo\n{\n    public function __sleep()\n    {\n        return array(\"\\0foo\\0private\", 'protected', 'public');\n    }\n}\nvar_dump(str_replace(\"\\0\", '\\0', serialize(new bar())));\n?>")).toMatchSnapshot();
  });
});
