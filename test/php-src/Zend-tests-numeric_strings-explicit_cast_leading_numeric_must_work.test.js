// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_strings/explicit_cast_leading_numeric_must_work.phpt
  it("Explicit cast of leading numeric strings should still work without warning", function () {
    expect(parser.parseCode("<?php\nvar_dump((int) \"2px\");\nvar_dump((float) \"2px\");\nvar_dump((int) \"2.5px\");\nvar_dump((float) \"2.5px\");\n?>")).toMatchSnapshot();
  });
});
