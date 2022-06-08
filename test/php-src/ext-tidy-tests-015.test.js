// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/015.phpt
  it("Passing configuration options through tidy_parse_file().", function () {
    expect(parser.parseCode("<?php\n        $tidy = tidy_parse_file(__DIR__.\"/015.html\", array('show-body-only'=>true));\n        tidy_clean_repair($tidy);\n        echo tidy_get_output($tidy);\n?>")).toMatchSnapshot();
  });
});
