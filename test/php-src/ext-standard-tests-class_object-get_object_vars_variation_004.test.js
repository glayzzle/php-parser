// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_object_vars_variation_004.phpt
  it("get_object_vars() fast/slow-path discrepancies", function () {
    expect(parser.parseCode("<?php\n$obj = (object)[\n    \"\\0A\\0b\" => 42,\n    \"\\0*\\0c\" => 24,\n    12 => 6,\n];\n$obj->test = new class implements JsonSerializable {\n    public function jsonSerialize(): mixed {\n        var_dump(get_object_vars($GLOBALS['obj']));\n        return null;\n    }\n};\nvar_dump(get_object_vars($obj));\n// Use json_encode to get a dump with apply_count > 0\njson_encode($obj);\n?>")).toMatchSnapshot();
  });
});
