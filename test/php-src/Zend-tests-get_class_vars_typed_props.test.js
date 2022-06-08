// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_typed_props.phpt
  it("get_class_vars() returns uninitialized typed properties with a null value", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static int $int1;\n    public static int $int2 = 42;\n    public int $int3;\n    public int $int4 = 42;\n}\nvar_dump(get_class_vars(Test::class));\n?>")).toMatchSnapshot();
  });
});
