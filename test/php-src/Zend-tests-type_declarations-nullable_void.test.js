// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/nullable_void.phpt
  it("Void cannot be nullable", function () {
    expect(parser.parseCode("<?php\nfunction test() : ?void {\n}\n?>")).toMatchSnapshot();
  });
});
