// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/die_string_cast_exception.phpt
  it("Bug #79777: String cast exception during die should be handled gracefully", function () {
    expect(parser.parseCode("<?php\ndie(new stdClass);\n?>")).toMatchSnapshot();
  });
});
