// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/var_dump-reference.phpt
  it("Enum var_dump reference", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n}\n$arr = [Foo::Bar];\n$arr[1] = &$arr[0];\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
