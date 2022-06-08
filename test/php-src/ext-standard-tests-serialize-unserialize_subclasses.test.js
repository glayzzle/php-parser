// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_subclasses.phpt
  it("Test unserialize() with allowed_classes and subclasses", function () {
    expect(parser.parseCode("<?php\nclass C {}\nclass D extends C {}\n$c = serialize(new C);\n$d = serialize(new D);\nvar_dump(unserialize($c, [\"allowed_classes\" => [\"C\"]]));\nvar_dump(unserialize($c, [\"allowed_classes\" => [\"D\"]]));\nvar_dump(unserialize($d, [\"allowed_classes\" => [\"C\"]]));\nvar_dump(unserialize($d, [\"allowed_classes\" => [\"D\"]]));\n?>")).toMatchSnapshot();
  });
});
