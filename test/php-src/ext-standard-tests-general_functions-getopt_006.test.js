// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_006.phpt
  it("getopt#006 (optind #1)", function () {
    expect(parser.parseCode("<?php\n    $optind = null;\n    getopt('a:b:', [], $optind);\n    var_dump($optind);\n?>")).toMatchSnapshot();
  });
});
