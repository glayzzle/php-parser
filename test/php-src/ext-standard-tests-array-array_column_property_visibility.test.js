// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_column_property_visibility.phpt
  it("array_column() respects property visibility", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $prop;\n    public function __construct($value) {\n        $this->prop = $value;\n    }\n    public function __isset($name) {\n        return true;\n    }\n    public function __get($name) {\n        return \"__get($this->prop)\";\n    }\n}\n$arr = [new Test(\"foobar\")];\nvar_dump(array_column($arr, \"prop\"));\n?>")).toMatchSnapshot();
  });
});
