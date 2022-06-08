// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_newInstanceArgs_002.phpt
  it("ReflectionClass::newInstanceArgs() - wrong arg type", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __construct($a, $b) {\n        echo \"In constructor of class B with arg $a\\n\";\n    }\n}\n$rc = new ReflectionClass('A');\n$a = $rc->newInstanceArgs('x');\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
