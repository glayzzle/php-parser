// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26010.phpt
  it("Bug #26010 (private / protected variables get exposed by get_object_vars())", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private $private = 'private';\n    protected $protected = 'protected';\n    public $public = 'public';\n}\n$data = new foo();\n$obj_vars = get_object_vars($data);\nvar_dump($obj_vars);\n?>")).toMatchSnapshot();
  });
});
