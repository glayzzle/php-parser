// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug67167.02.phpt
  it("Bug #67167: filter_var(null,FILTER_VALIDATE_BOOLEAN,FILTER_NULL_ON_FAILURE) returns null", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\n    null,\n    FILTER_VALIDATE_BOOLEAN,\n    FILTER_NULL_ON_FAILURE\n));\n?>")).toMatchSnapshot();
  });
});
