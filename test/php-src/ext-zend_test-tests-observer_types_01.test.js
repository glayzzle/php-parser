// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_types_01.phpt
  it("Observer: Observe basic TypeError", function () {
    expect(parser.parseCode("<?php\nfunction foo(array $a) { return 1; }\nfoo(42);\n?>")).toMatchSnapshot();
  });
});
