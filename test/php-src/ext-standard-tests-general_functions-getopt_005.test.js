// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_005.phpt
  it("getopt#005 (Required values)", function () {
    expect(parser.parseCode("<?php\n    var_dump(getopt(\"a:\", array(\"arg:\")));\n?>")).toMatchSnapshot();
  });
});
