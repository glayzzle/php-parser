// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum-in-static-var.phpt
  it("Enum in static var", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nfunction example() {\n    static $bar = Foo::Bar;\n    return $bar;\n}\nvar_dump(example());\nvar_dump(example());\n?>")).toMatchSnapshot();
  });
});
