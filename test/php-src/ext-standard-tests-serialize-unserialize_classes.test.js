// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_classes.phpt
  it("Test unserialize() with second parameter", function () {
    expect(parser.parseCode("<?php\nclass foo {\n        public $x = \"bar\";\n}\n$z = array(new foo(), 2, \"3\");\n$s = serialize($z);\nvar_dump(unserialize($s));\nvar_dump(unserialize($s, [\"allowed_classes\" => false]));\nvar_dump(unserialize($s, [\"allowed_classes\" => true]));\nvar_dump(unserialize($s, [\"allowed_classes\" => [\"bar\"]]));\nvar_dump(unserialize($s, [\"allowed_classes\" => [\"FOO\"]]));\nvar_dump(unserialize($s, [\"allowed_classes\" => [\"bar\", \"foO\"]]));\n?>")).toMatchSnapshot();
  });
});
