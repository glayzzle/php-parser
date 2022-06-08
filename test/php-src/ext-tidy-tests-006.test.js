// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/006.phpt
  it("Verbose tidy_get_error_buffer()", function () {
    expect(parser.parseCode("<?php\n    $a = tidy_parse_string(\"<HTML><asd asdf></HTML>\");\n    echo tidy_get_error_buffer($a);\n?>")).toMatchSnapshot();
  });
});
