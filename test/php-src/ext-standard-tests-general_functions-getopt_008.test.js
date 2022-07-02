// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getopt_008.phpt
  it("getopt#008 (optind #3)", function () {
    expect(parser.parseCode("<?php\n    $optind = null;\n    getopt('a:b:', [], $optind);\n    var_dump($optind);\n?>")).toMatchSnapshot();
  });
});
