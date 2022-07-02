// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_overwrite_undeclared_protected.phpt
  it("Overwriting an undeclared property with protected mangling", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    // We need at least one declared property, even though we don't use it.\n    public $foo;\n}\n$str = <<<STR\nO:4:\"Test\":2:{s:4:\"\\0*\\0x\";N;s:4:\"\\0*\\0x\";N;}\nSTR;\nvar_dump(unserialize($str));\n?>")).toMatchSnapshot();
  });
});
