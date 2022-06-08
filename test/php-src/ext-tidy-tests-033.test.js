// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/033.phpt
  it("tidy_warning_count() function - basic test for tidy_warning_count()", function () {
    expect(parser.parseCode("<?php\n$buffer = '<img src=\"file.png\" /><php>';\n$tidy = tidy_parse_string($buffer);\nvar_dump(tidy_warning_count($tidy));\n?>")).toMatchSnapshot();
  });
});
