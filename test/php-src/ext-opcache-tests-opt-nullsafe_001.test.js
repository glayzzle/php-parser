// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/nullsafe_001.phpt
  it("Nullsafe basic optimization", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $null = null;\n    var_dump($null?->foo);\n    var_dump(isset($null?->foo));\n    var_dump(empty($null?->foo));\n}\nfunction test2(object $obj) {\n    // TODO: Optimize the JMP_NULL away.\n    var_dump($obj?->foo);\n    var_dump(isset($obj?->foo));\n    var_dump(empty($obj?->foo));\n}\n?>")).toMatchSnapshot();
  });
});
