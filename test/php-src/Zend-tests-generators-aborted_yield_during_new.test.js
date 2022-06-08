// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/aborted_yield_during_new.phpt
  it("Aborted yield during object instantiation", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __construct() {}\n}\nfunction gen() {\n    $x = new Foo(yield);\n}\ngen()->rewind();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
