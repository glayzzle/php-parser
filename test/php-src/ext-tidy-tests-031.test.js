// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/031.phpt
  it("tidy_config_count() function - basic test for tidy_config_count()", function () {
    expect(parser.parseCode("<?php\n$buffer = '<html></html>';\n$config = array('doctype' => 'php');\n$tidy = tidy_parse_string($buffer, $config);\nvar_dump(tidy_config_count($tidy));\n?>")).toMatchSnapshot();
  });
});
