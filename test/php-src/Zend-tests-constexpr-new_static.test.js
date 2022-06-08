// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_static.phpt
  it("Static in new is not supported", function () {
    expect(parser.parseCode("<?php\nstatic $x = new static;\n?>")).toMatchSnapshot();
  });
});
