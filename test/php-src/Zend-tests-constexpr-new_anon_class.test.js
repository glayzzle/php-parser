// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_anon_class.phpt
  it("New with anonymous class is not supported in constant expressions", function () {
    expect(parser.parseCode("<?php\nstatic $x = new class {};\n?>")).toMatchSnapshot();
  });
});
