// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72146.phpt
  it("Bug #72146 (Integer overflow on substr_replace)", function () {
    expect(parser.parseCode("<?php \nvar_dump(substr_replace([\"ABCDE\"], \"123\", 3, PHP_INT_MAX));\n?>")).toMatchSnapshot();
  });
});
