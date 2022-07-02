// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60153.phpt
  it("Bug #60153 (Interface method prototypes not enforced when implementd via traits.)", function () {
    expect(parser.parseCode("<?php\ninterface IFoo {\n    public function oneArgument($a);\n}\ntrait TFoo {\n  public function oneArgument() {}\n}\nclass C implements IFoo {\n  use TFoo;\n}\n?>")).toMatchSnapshot();
  });
});
