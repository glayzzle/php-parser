// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/basic-methods.phpt
  it("Enum methods", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n    public function dump() {\n        var_dump($this);\n    }\n}\nFoo::Bar->dump();\nFoo::Baz->dump();\n?>")).toMatchSnapshot();
  });
});
