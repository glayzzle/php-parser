// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_063.phpt
  it("Closure::bindTo leaks with \"fake\" closure", function () {
    expect(parser.parseCode("<?php\nfunction foo(){\n    static $y;\n}\nClosure::fromCallable('foo')->bindTo(new stdClass);\n?>\nDONE")).toMatchSnapshot();
  });
});
