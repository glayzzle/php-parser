// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_optional_arg_002.phpt
  it("default argument value in interface implementation", function () {
    expect(parser.parseCode("<?php\ninterface test {\n    public function bar();\n}\nclass foo implements test {\n    public function bar($arg = 2) {\n        var_dump($arg);\n    }\n}\n$foo = new foo;\n$foo->bar();\n?>")).toMatchSnapshot();
  });
});
