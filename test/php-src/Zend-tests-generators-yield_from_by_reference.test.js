// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_by_reference.phpt
  it("Yield from by reference is not supported", function () {
    expect(parser.parseCode("<?php\nfunction &gen() {\n    yield from [];\n}\n?>")).toMatchSnapshot();
  });
});
