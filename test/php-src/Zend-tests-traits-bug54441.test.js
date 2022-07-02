// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug54441.phpt
  it("Bug #54441 (Changing trait static method visibility)", function () {
    expect(parser.parseCode("<?php\ntrait Foo {\n  public function bar() {}\n}\nclass Boo {\n  use Foo {\n    bar as dontKnow;\n    dontKnow as protected;\n  }\n}\n?>")).toMatchSnapshot();
  });
});
