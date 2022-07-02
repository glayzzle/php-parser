// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/interface_extends_static.phpt
  it("Interface cannot extend static, as it is reserved", function () {
    expect(parser.parseCode("<?php\ninterface Foo extends static {}\n?>")).toMatchSnapshot();
  });
});
