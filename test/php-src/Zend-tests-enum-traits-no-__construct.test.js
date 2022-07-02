// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/traits-no-__construct.phpt
  it("Enum traits no __construct", function () {
    expect(parser.parseCode("<?php\ntrait Foo {\n    public function __construct() {\n        echo \"Evil code\\n\";\n    }\n}\nenum Bar {\n    use Foo;\n    case Baz;\n}\nvar_dump(Bar::Baz);\n?>")).toMatchSnapshot();
  });
});
