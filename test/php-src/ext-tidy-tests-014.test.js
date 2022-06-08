// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/014.phpt
  it("Passing configuration options through tidy_parse_string().", function () {
    expect(parser.parseCode("<?php\n        $text = \"<B>testing</I>\";\n        $tidy = tidy_parse_string($text, array('show-body-only'=>true));\n        tidy_clean_repair($tidy);\n        echo tidy_get_output($tidy);\n?>")).toMatchSnapshot();
  });
});
