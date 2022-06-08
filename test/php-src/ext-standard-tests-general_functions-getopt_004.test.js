// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_004.phpt
  it("getopt#004 (Optional values)", function () {
    expect(parser.parseCode("<?php\n    var_dump(getopt(\"v::\", array(\"v::\")));\n?>")).toMatchSnapshot();
  });
});
