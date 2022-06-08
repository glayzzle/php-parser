// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/010.phpt
  it("timezone_abbreviations_list() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n  $timezone_abbreviations = timezone_abbreviations_list();\n  var_dump($timezone_abbreviations[\"utc\"]);\n  echo \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
