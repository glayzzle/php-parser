// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_conversion_keys.phpt
  it("Verifies the correct conversion of objects to arrays", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    private $private = 'private';\n    protected $protected = 'protected';\n    public $public = 'public';\n}\nvar_export((array) new foo);\n?>")).toMatchSnapshot();
  });
});
