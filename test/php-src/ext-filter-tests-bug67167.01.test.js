// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug67167.01.phpt
  it("Bug #67167: object with VALIDATE_BOOLEAN and NULL_ON_FAILURE", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\n    new \\StdClass(),\n    FILTER_VALIDATE_BOOLEAN,\n    FILTER_NULL_ON_FAILURE\n));\n?>")).toMatchSnapshot();
  });
});
