// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ast_serialize_backtick_literal.phpt
  it("Serialization of backtick literal is incorrect", function () {
    expect(parser.parseCode("<?php\nassert_options(ASSERT_WARNING);\nassert(false && `echo -n \"\"`);\n?>")).toMatchSnapshot();
  });
});
