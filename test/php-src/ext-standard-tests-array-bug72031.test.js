// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug72031.phpt
  it("Bug #72031: array_column() against an array of objects discards all values matching null", function () {
    expect(parser.parseCode("<?php\nclass myObj {\n    public $prop;\n    public function __construct($prop) {\n        $this->prop = $prop;\n    }\n}\n$objects = [\n    new myObj(-1),\n    new myObj(0),\n    new myObj(1),\n    new myObj(2),\n    new myObj(null),\n    new myObj(true),\n    new myObj(false),\n    new myObj('abc'),\n    new myObj(''),\n];\nvar_dump(array_column($objects, 'prop'));\n?>")).toMatchSnapshot();
  });
});
