// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_007.phpt
  it("ZE2 Late Static Binding ensuring implementing 'static' is not allowed", function () {
    expect(parser.parseCode("<?php\nclass Foo implements static {\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
