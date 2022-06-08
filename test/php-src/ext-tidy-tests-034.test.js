// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/034.phpt
  it("tidy_access_count() function - basic test for tidy_access_count()", function () {
    expect(parser.parseCode("<?php\n$buffer = '<img src=\"file.png\" /><php>';\n$config = array(\n  'accessibility-check' => 1);\n$tidy = tidy_parse_string($buffer, $config);\n$tidy->diagnose();\nvar_dump(tidy_access_count($tidy));\n?>")).toMatchSnapshot();
  });
});
