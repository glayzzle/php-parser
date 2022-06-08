// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_003.phpt
  it("getopt#003", function () {
    expect(parser.parseCode("<?php\n    var_dump(getopt(\"2a:vcd1\", array(\"another:\", 12, 0, 1, \"v\")));\n?>")).toMatchSnapshot();
  });
});
