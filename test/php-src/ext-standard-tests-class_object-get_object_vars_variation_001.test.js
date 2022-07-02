// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_object_vars_variation_001.phpt
  it("get_object_vars() - ensure statics are not shown", function () {
    expect(parser.parseCode("<?php\nClass A {\n    public static $var = 'hello';\n}\n$a = new A;\nvar_dump(get_object_vars($a));\n?>")).toMatchSnapshot();
  });
});
