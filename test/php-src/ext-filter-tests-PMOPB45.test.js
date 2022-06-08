// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/PMOPB45.phpt
  it("PMOPB-45-2007:PHP ext/filter Email Validation Vulnerability", function () {
    expect(parser.parseCode("<?php\n    $var = \"test@example.com\\n\";\n    var_dump(filter_var($var, FILTER_VALIDATE_EMAIL));\n?>")).toMatchSnapshot();
  });
});
