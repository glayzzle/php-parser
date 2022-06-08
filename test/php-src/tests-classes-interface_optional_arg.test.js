// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_optional_arg.phpt
  it("ZE2 An interface method allows additional default arguments", function () {
    expect(parser.parseCode("<?php\nerror_reporting(4095);\ninterface test {\n    public function bar();\n}\nclass foo implements test {\n    public function bar($foo = NULL) {\n        echo \"foo\\n\";\n    }\n}\n$foo = new foo;\n$foo->bar();\n?>")).toMatchSnapshot();
  });
});
