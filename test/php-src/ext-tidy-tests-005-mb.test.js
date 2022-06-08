// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/005-mb.phpt
  it("tidy_parse_file()", function () {
    expect(parser.parseCode("<?php\n    $a = tidy_parse_file(__DIR__.\"/005私はガラスを食べられます.html\");\n    echo tidy_get_output($a);\n?>")).toMatchSnapshot();
  });
});
