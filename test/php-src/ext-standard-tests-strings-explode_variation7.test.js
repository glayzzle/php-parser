// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/explode_variation7.phpt
  it("Test explode() function : usage variations - when $string length is greater than\nEXPLODE_ALLOC_STEP (64) and the $limit is negative", function () {
    expect(parser.parseCode("<?php\nvar_dump(count(explode('|', implode('|', range(1,65)), -1)));\n?>")).toMatchSnapshot();
  });
});
