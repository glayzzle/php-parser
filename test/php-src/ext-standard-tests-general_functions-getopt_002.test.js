// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_002.phpt
  it("getopt#002", function () {
    expect(parser.parseCode("<?php\n    var_dump(getopt(\"2a:vcd1\"));\n?>")).toMatchSnapshot();
  });
});
