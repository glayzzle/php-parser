// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt.phpt
  it("getopt", function () {
    expect(parser.parseCode("<?php\n    var_dump(getopt(\"d:m:j:vht\"));\n?>")).toMatchSnapshot();
  });
});
