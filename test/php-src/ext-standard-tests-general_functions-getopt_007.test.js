// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_007.phpt
  it("getopt#007 (optind #2)", function () {
    expect(parser.parseCode("<?php\n    $optind = null;\n    getopt('a:b:', [], $optind);\n    var_dump($optind);\n?>")).toMatchSnapshot();
  });
});
