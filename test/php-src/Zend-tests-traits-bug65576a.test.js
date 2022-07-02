// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug65576a.phpt
  it("Bug #65576 (Constructor from trait conflicts with inherited constructor)", function () {
    expect(parser.parseCode("<?php\ntrait T\n{\n  public function __construct()\n  {\n    echo \"Trait constructor\\n\";\n  }\n}\nclass A\n{\n  public function __construct()\n  {\n    echo \"Parent constructor\\n\";\n  }\n}\nclass B extends A\n{\n  use T;\n}\nnew B();\n?>")).toMatchSnapshot();
  });
});
