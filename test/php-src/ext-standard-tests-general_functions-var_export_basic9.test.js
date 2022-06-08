// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic9.phpt
  it("Bug #55082: var_export() doesn't escape properties properly", function () {
    expect(parser.parseCode("<?php\n    $x = new stdClass();\n    $x->{'\\'\\\\'} = 7;\n    echo var_export($x);\n?>")).toMatchSnapshot();
  });
});
