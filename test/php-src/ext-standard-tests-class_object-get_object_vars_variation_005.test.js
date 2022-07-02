// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_object_vars_variation_005.phpt
  it("get_object_vars() no-declared/declared discrepancies", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n}\n// Using ArrayObject here to get around property name restrictions\n$obj = new stdClass;\n$ao = new ArrayObject($obj);\n$ao[\"\\0A\\0b\"] = 42;\n$ao[\"\\0*\\0b\"] = 24;\n$ao[12] = 6;\nvar_dump(get_object_vars($obj));\n$obj = new Test;\n$ao = new ArrayObject($obj);\n$ao[\"\\0A\\0b\"] = 42;\n$ao[\"\\0*\\0b\"] = 24;\n$ao[12] = 6;\nvar_dump(get_object_vars($obj));\n?>")).toMatchSnapshot();
  });
});
